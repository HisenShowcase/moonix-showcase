import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home.component";
import {NavbarComponent} from "./component/web/navbar/navbar.component";
import {HeroComponent} from "./component/web/hero/hero.component";
import {FeaturesComponent} from "./component/web/features/features.component";
import {StatsComponent} from "./component/web/stats/stats.component";
import {CommunityComponent} from "./component/web/community/community.component";
import {FooterComponent} from "./component/web/footer/footer.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {NgModel} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthGuard} from "./auth.guard";
import {AuthInterceptor} from "./app.auth-interceptor";
import {RulesComponent} from "./component/web/rules/rules.component";
import { ReviewsComponent } from './component/web/review/review.component';
import { TeamComponent } from './component/web/team/team.component';

@NgModule({
  declarations: [
    NgModule,
    
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RouterModule.forRoot(routes),
    NgIf,
    HeroComponent,
    FeaturesComponent,
    StatsComponent,
    CommunityComponent,
    ReviewsComponent,
    FooterComponent,
    RulesComponent,
    TeamComponent
  ],
  exports: [RouterModule, ReviewsComponent],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
