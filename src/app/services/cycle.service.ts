import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Cycle} from "../models/cycle";

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  baseRoot:string = `${environment.api_gateway.baseRoot_v1}/cycles`

  constructor(private httpClient: HttpClient) { }

  get cycles():Observable<Array<Cycle>>{
    return this.httpClient.get<Array<Cycle>>(this.baseRoot)
  }
}
