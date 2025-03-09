import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule, routes } from "./app.routes";

import { AppComponent } from './app.component'; // Standalone component, import only
import { HomeComponent } from "./home.component"; // Standalone, import only
import { NavbarComponent } from "./component/web/navbar/navbar.component"; // Standalone, import only
import { HeroComponent } from "./component/web/hero/hero.component"; // Standalone, import only
import { FeaturesComponent } from "./component/web/features/features.component"; // Standalone, import only
import { StatsComponent } from "./component/web/stats/stats.component"; // Standalone, import only
import { CommunityComponent } from "./component/web/community/community.component"; // Standalone, import only
import { FooterComponent } from "./component/web/footer/footer.component"; // Standalone, import only
import { RulesComponent } from "./component/web/rules/rules.component"; // Standalone, import only
import { ReviewsComponent } from "./component/web/review/review.component"; // Standalone, import only
import { TeamComponent } from "./component/web/team/team.component"; // Standalone, import only
import { StoreComponent } from "./component/web/store/store.component"; // Standalone, import only

import { AuthGuard } from "./auth.guard";
import { AuthInterceptor } from "./app.auth-interceptor";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,

    // ✅ Import standalone components instead of declaring them
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    StatsComponent,
    CommunityComponent,
    FooterComponent,
    RulesComponent,
    ReviewsComponent,
    StoreComponent,
    TeamComponent
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class AppModule { }
