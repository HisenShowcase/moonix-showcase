import {ChangeDetectionStrategy, Component} from '@angular/core';
import {McstatusService} from "../../../service/mcstatus/mcstatus.service";
import {Observable, timer} from "rxjs";
import {ServerData} from "../../../service/mcstatus/model/ServerData";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  constructor(private status: McstatusService) {

  }

  public GetServerData() : ServerData
  {
    return this.status.serverData;
  }

  ngAfterViewInit() {
    timer(0, 1000).subscribe(() => {
      this.RefreshStats();
    })
  }

  public RefreshStats(): string {
    if (this.status.serverData == null) {
      return "---";
    }

    const lastRefresh = (<ServerData>this.status.serverData).retrieved_at;
    const curTime = new Date().getTime();
    let diffInSeconds = Math.floor((curTime - lastRefresh) / 1000);

    if(diffInSeconds < 0)
      return "0s";

    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = diffInSeconds % 60;

    let result = "";
    if (minutes > 0) {
      result += `${minutes}min `;
    }
    result += `${seconds}s`;

    return result;
  }


}
