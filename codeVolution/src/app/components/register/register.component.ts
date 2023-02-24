import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private authService:AuthService){}
  onRegister(){
    
    this.authService.registerUser(this.registerUserData).subscribe(
      res => {console.log(res);},
      err=>{console.log(err);}
    );
    
  }
}
