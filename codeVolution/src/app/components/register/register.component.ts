import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUserData={
    email:'',
    password:''
  }
  constructor(private authService:AuthService,private router:Router){}
  onRegister(){
    
    this.authService.registerUser(this.registerUserData).subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        console.log(res)
        this.router.navigate(['/special-events'])
      },
      err=>{console.log(err);}
    );
    
  }
}
