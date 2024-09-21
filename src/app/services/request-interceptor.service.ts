import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

// Definindo as rotas públicas
const publicRoutes: string[] = ['/user', '/login'];

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // Verificando se a rota é pública
  const isPublicRoute = publicRoutes.some(route => req.url.includes(route));
  console.log('Rota pública:', isPublicRoute);

  // Se não for uma rota pública, adiciona o token
  if (!isPublicRoute) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      console.log('Token encontrado:', token);

      if (token) {
        // Clona a requisição e adiciona o token no cabeçalho
        const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });

        return next(clonedRequest);
      }
    }
  }

 
  return next(req);
}
