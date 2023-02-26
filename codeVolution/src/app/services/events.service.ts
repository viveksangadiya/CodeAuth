import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EventsService implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
      
  }

  getEvents(){
    return this.http.get<any>("http://localhost:3000/api/events")
  }

  getSpecialEvents(){
    return this.http.get<any>("http://localhost:3000/api/special-events")
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
 }
}
