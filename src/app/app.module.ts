import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";

import { AuthGuard } from "./auth.guard";
import { AuthInterceptor } from "./app.auth-interceptor";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    importProvidersFrom(
      RouterModule, // ✅ Ensures routing works correctly
      HttpClientModule, // ✅ Ensures HTTP requests work
    ),
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class AppModule { }
