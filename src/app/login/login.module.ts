import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login.routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    ProfileComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HomeModule
  ],
  exports:[
    ProfileComponent,
    SigninComponent,
    SignupComponent
  ]
})
export class LoginModule { }
