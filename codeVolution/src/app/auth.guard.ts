import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './services/events.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private eventsService:EventsService,private router:Router){}

  canActivate():boolean {
    if(this.eventsService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
