import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  cpassword: string = '';
  passwordMismatch: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Check if password and confirm password match
    if (this.password === this.cpassword) {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password
      };

      this.authService.registerUser(user).subscribe(
        (response) => {
          alert('Registration successful! Redirecting to login page');
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Registration failed. Please try again.');
        }
      );
    } else {
      // Show password mismatch popup or handle it accordingly
      this.passwordMismatch = true;
    }
  }
}
