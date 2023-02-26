import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData={
    email :'',
    password:''
  }

  constructor(private authService:AuthService,private router:Router){}

  onLogin(){
      return this.authService.loginUser(this.loginUserData).subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.token)
        this.router.navigate(['/special-events'])
        },
        
        err=>{console.log(err)}
      )
  }
}
