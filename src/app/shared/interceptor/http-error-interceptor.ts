import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      catchError(err => {
        console.error(err);
        return throwError(err)
      }));
  }
}
