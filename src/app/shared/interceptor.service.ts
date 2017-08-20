
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({headers: req.headers.set('X-Auth-Token', '7c94f28bddf34648bd9a6f5c2e2da0f0')});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}