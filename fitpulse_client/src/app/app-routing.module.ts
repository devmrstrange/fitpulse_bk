import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'my-profile', component: MyProfileComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginPageComponent},
  {path:'home', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
