import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../models/course";
import {catchError, map, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {setLogin} from "../store/actions/login-page.actions";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = environment.api_gateway.baseRoot_v1;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store) {}


  signUp(user: any): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(user: any) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('user', JSON.stringify({"remember":false}));

        const emailWithOutDomain = (user.username).substring(0, user.username.indexOf("@"))

        this.store.dispatch(setLogin(user));

        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate([`profile/${emailWithOutDomain}`]).then(r => {});
        });
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserStorage(){
    const user:any = localStorage.getItem('user')
    return JSON.parse(user)
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
