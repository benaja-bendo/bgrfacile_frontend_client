import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseRoot:string = `${environment.api_gateway.baseRoot_v1}/ecoles`

  constructor(private httpClient: HttpClient) { }

  get schools():Observable<any>{
    return this.httpClient.get<any>(this.baseRoot)
  }
}
