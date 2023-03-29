import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IUser> {
    return this.httpClient.get<IUser>(environment.API.URL + environment.API.page + '1' + environment.API.results + '25' + environment.API.seed,
      {
        headers: {
       "Access-Control-Allow-Origin": "*"
      }})
  }
}
