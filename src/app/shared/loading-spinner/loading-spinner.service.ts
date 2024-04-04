import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";

@Injectable({
  providedIn: 'root'
})
// export class LoadingSpinnerService implements HttpInterceptor{

//   constructor() { }
  
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return next.handle(req).pipe();
//   }
// }

export class LoadingSpinnerService{

  constructor() { }
}
