import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser> {
    return this.httpClient.get<IUser>(environment.API.URL + environment.API.results + environment.API.seed)
  }

  getAllByFilteredOptions(option: string): Observable<IUser> {
    return this.httpClient.get<IUser>(environment.API.URL + environment.API.options + option + environment.API.results + environment.API.seed)
  }

  getOneRandomUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(environment.API.URL)
  }
}
