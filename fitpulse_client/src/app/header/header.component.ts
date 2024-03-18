import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
 
  LoginRoute():void{
    this.router.navigate(['/login']);
  }
  RegisterRoute():void{
    this.router.navigate(['/register']);
  }
  HomeRoute():void{
    this.router.navigate(['/']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}