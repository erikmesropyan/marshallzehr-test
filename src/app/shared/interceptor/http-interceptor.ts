import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest.clone({url: environment.apiUrl + httpRequest.url}));
  }
}
