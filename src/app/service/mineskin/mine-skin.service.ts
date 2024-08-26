import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineSkinService {
  blobImage: any;

  private baseUrl = 'https://mineskin.eu/armor/body/%player%/100.png';

  constructor(private http: HttpClient) {

  }

  getPlayerImage(playerName: string): Observable<any> {
    return this.http.get(`${this.baseUrl.replace("%player%", playerName)}`,{
      headers: {
        'No-Auth': 'True',
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  getServerStatus(): void {

      this.getPlayerImage("Sweet_Duck")
        .subscribe((response) => { var blob = new Blob([response.text()], {type: "image/png"});
          console.log(blob);
          console.log(window.btoa(blob.toString()));
          this.blobImage = blob;
        });
  }
}
