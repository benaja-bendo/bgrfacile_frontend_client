import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  baseRoot:string = `${environment.api_gateway.baseRoot_v1}/cycles`

  constructor(private httpClient: HttpClient) { }

  get cycles():Observable<any>{
    return this.httpClient.get<any>(this.baseRoot)
  }
}
