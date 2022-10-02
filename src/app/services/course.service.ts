import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseRoot:string=`${environment.api_gateway.baseRoot_v1}/cours`

  constructor(
    private httpClient: HttpClient
  ) { }

  getCourses():Observable<any>{
    return this.httpClient.get<any>(this.baseRoot)
  }
}
