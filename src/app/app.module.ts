import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';  // Make sure the correct imports are used
import { AppRoutingModule } from "./app.routes"; // Import app-routing module
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { NavbarComponent } from "./component/web/navbar/navbar.component";
import { HeroComponent } from "./component/web/hero/hero.component";
import { FeaturesComponent } from "./component/web/features/features.component";
import { StatsComponent } from "./component/web/stats/stats.component";
import { CommunityComponent } from "./component/web/community/community.component";
import { FooterComponent } from "./component/web/footer/footer.component";
import { RulesComponent } from "./component/web/rules/rules.component";
import { ReviewsComponent } from "./component/web/review/review.component";
import { TeamComponent } from "./component/web/team/team.component";
import { StoreComponent } from "./component/web/store/store.component";
import { routes } from './app.routes'; // Import your routes here

import { AuthGuard } from "./auth.guard";
import { AuthInterceptor } from "./app.auth-interceptor";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Use routing module
    RouterModule.forRoot(routes, { useHash: true }),
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    StatsComponent,
    CommunityComponent,
    FooterComponent,
    RulesComponent,
    StoreComponent,
    TeamComponent,
    ToastrModule.forRoot(), // Provide ToastConfig
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
})
export class AppModule { }
