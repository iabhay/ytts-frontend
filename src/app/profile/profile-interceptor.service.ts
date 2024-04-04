import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class ProfileInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = sessionStorage.getItem('access_token');
        console.log(access_token);
        const authorizedRequest = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${access_token}`),
        });
        return next.handle(authorizedRequest);
    }
}