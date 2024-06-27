import { Component } from '@angular/core';
import {NavbarComponent} from "./component/web/navbar/navbar.component";
import {HeroComponent} from "./component/web/hero/hero.component";
import {FeaturesComponent} from "./component/web/features/features.component";
import {StatsComponent} from "./component/web/stats/stats.component";
import {CommunityComponent} from "./component/web/community/community.component";
import {FooterComponent} from "./component/web/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommunityComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent,
    NavbarComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-stats></app-stats>
    <app-community></app-community>
    <app-footer></app-footer>
  `
})
export class HomeComponent { }
