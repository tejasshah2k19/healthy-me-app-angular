import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddIngredientsComponent } from './components/add-ingredients/add-ingredients.component';
import { ListIngredientsComponent } from './components/list-ingredients/list-ingredients.component';
import { EditIngredientsComponent } from './components/edit-ingredients/edit-ingredients.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';



@NgModule({
  declarations: [AdminLayoutComponent, AdminDashboardComponent, AddIngredientsComponent, ListIngredientsComponent, EditIngredientsComponent, AdminMenuComponent],
  imports: [ 
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
