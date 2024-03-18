import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms'; 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
[x: string]: any;

  email!: string ;
  password!: string;
  isLoggedIn: boolean = false;
  keepMeSignedIn: boolean = false;
  constructor(private authService: AuthService,private router:Router) {}

  login() {
    const user = {
      email: this.email,
      password:this.password
    }
    this.authService.loginUser(user).subscribe(
      (response) => {
        if(response==="Login successful!"){
          alert("Login Successfull!! Redirecting to home page");
          this.authService.setLoggedInStatus(true);
          this.router.navigate(['/home']);
        }
        else{
          alert("Invalid credentials,Try again");
        }   
      }
    );
  }
 
  
}

