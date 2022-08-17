import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Course} from "../models/course";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseRoot:string=`${environment.api_gateway.baseRoot_v1}/cours`

  constructor(
    private httpClient: HttpClient
  ) { }

  get courses():Observable<Array<Course>>{
    return this.httpClient.get<Array<Course>>(this.baseRoot)
  }
}
