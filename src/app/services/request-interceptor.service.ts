import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

const privatesRoutes: string[] = ['/notice', '/category'];

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  return next(req);
}
