import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      const clonedreq = req.clone({
        headers: req.headers.set('Access-Control-Allow-Origin', '*')
      })
      return next.handle(clonedreq);
    }

    if (localStorage.getItem('token') != null) {
      const clonedreq = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        )
      });
      return next.handle(clonedreq).pipe(
        tap(
          succ => {},
          err => {
            console.log("Problem with communicating..")
          }
        )
      );
    } else {

    }



    return next.handle(req); //Buhvi jestli staci toto zda neni chyba nekde tady xdx
  }
}
