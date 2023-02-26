import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { EventsService } from './services/events.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let eventService=this.injector.get(EventsService)
      let tokenReq=req.clone( 
        {
          setHeaders:{
            Authorization : `Bearer ${eventService.getToken()}`
          }
        }
      )
      return next.handle(tokenReq);
  }
}
