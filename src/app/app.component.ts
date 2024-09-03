import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./component/web/navbar/navbar.component";
import {HeroComponent} from "./component/web/hero/hero.component";
import {FeaturesComponent} from "./component/web/features/features.component";
import {StatsComponent} from "./component/web/stats/stats.component";
import {CommunityComponent} from "./component/web/community/community.component";
import {FooterComponent} from "./component/web/footer/footer.component";
import {LoginComponent} from "./component/web/login/login.component";
import {Toast, ToastrService} from "ngx-toastr";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {McstatusService} from "./service/mcstatus/mcstatus.service";
import {AccountPanelComponent} from "./component/panel/main/account-panel.component";
import {AccountService} from "./service/account/account.service";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {NgModel} from "@angular/forms";
import { ReviewsService } from './service/review/reviews.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    { provide: ToastrService, useClass: ToastrService },
    McstatusService,
    ReviewsService,
    AccountService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Moonix | Hlavní Stránka';
}
