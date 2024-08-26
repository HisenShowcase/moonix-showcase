import { Injectable } from '@angular/core';
import {map, Observable, of} from 'rxjs';
import { Account } from './model/account.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Motd, Players, ServerDataModel, SrvRecord, Version} from "../mcstatus/model/server-data.model";
import {AppConstants} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccount(name: string): Observable<Account> {
    return this.httpClient.get<any>(`${AppConstants.API_URL}/accounts/${name}`)
      .pipe(
        map(data => {
          const account: Account = {
            id: data.id,
            data: data.data,
            session: data.session
          };
          return account;
        })
      );
  }
}
