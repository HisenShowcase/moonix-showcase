import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscription, timer} from 'rxjs';
import {Motd, Players, ServerData, SrvRecord, Version} from "./model/ServerData";

@Injectable({
  providedIn: 'root'
})
export class McstatusService {
  serverName = "play.moonix.cz";
  serverStatusJson: any;
  serverData: any;
  subscription: Subscription;
  everyFiveSeconds: Observable<number> = timer(0, 120000);

  private baseUrl = 'https://api.mcstatus.io/v2/status/java';

  constructor(private http: HttpClient) {
    this.subscription = this.everyFiveSeconds.subscribe(() => {
      this.getServerStatus();
    });
  }

  getStatus(server: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${server}`, {});
  }

  getServerStatus(): void {
    this.getStatus(this.serverName).subscribe((data) => {
      this.serverStatusJson = data;

      console.log("Fetching server data..");

      try {
        let parsedData;

        // Check if data is already an object
        if (typeof data === 'string') {
          parsedData = JSON.parse(data);
        } else {
          parsedData = data;
        }

        const serverData = new ServerData();
        Object.assign(serverData, parsedData);

        // If there are nested objects, you need to manually assign them as well
        serverData.srv_record = Object.assign(new SrvRecord(), parsedData.srv_record);
        serverData.version = Object.assign(new Version(), parsedData.version);
        serverData.players = Object.assign(new Players(), parsedData.players);
        serverData.motd = Object.assign(new Motd(), parsedData.motd);

        this.serverData = serverData;
        console.log("Fetching server data completed..");
      } catch (e) {
        console.error('Error parsing JSON response:', e);
      }
    });
  }
}
