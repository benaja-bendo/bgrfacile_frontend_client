import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = environment.api_gateway.baseRoot_v1;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser! :User ;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store:Store) {}


  signUp(user: any): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(user: any):Observable<any> {
    return this.http.post<any>(`${this.endpoint}/login`, user)
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserStorage(){
    const user:any = localStorage.getItem('user')
    return JSON.parse(user)
  }

  getCurrentUser():User{
    if (this.isLoggedIn){
      return  this.getUserStorage().user as User
    }
    return {}
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeUser = localStorage.removeItem('user');
    if (removeToken == null && removeUser == null) {
      this.router.navigate(['login']).then(r => {});
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/users/${id}`;
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
