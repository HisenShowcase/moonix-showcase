import { Component } from '@angular/core';
import {NavbarComponent} from "./component/web/navbar/navbar.component";
import {HeroComponent} from "./component/web/hero/hero.component";
import {FeaturesComponent} from "./component/web/features/features.component";
import {StatsComponent} from "./component/web/stats/stats.component";
import {CommunityComponent} from "./component/web/community/community.component";
import {FooterComponent} from "./component/web/footer/footer.component";
import {ReviewsComponent} from './component/web/review/review.component';
import {TeamComponent } from './component/web/team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommunityComponent,
    FooterComponent,
    StatsComponent,
    FeaturesComponent,
    HeroComponent,
    NavbarComponent,
    ReviewsComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-reviews></app-reviews>
    <app-footer></app-footer>
  `
})
export class HomeComponent { }
