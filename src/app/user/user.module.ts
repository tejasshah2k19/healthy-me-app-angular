import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListIngredientComponent } from './components/list-ingredient/list-ingredient.component';
import { AuthTokenInterceptor } from './interceptor/auth-token.interceptor';



@NgModule({
  declarations: [UserLayoutComponent, HomeComponent, AddIngredientComponent, ListIngredientComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true
    }
  ]
})
export class UserModule { }
