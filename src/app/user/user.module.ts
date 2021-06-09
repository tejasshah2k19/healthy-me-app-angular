import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [UserLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
