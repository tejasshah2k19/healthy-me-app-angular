import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { HomeComponent } from './components/home/home.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: "user", component: UserLayoutComponent, children: [
      { path: "home", component: HomeComponent },
      {path:"addingredient",component:AddIngredientComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
