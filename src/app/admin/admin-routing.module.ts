import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientsComponent } from './components/add-ingredients/add-ingredients.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { EditIngredientsComponent } from './components/edit-ingredients/edit-ingredients.component';
import { ListIngredientsComponent } from './components/list-ingredients/list-ingredients.component';

const routes: Routes = [
  {
    path: "admin", component: AdminLayoutComponent, children:
      [
        { path: "dashboard", component: AdminDashboardComponent },
        {path:"addingredients",component:AddIngredientsComponent},
        {path:"editingredients",component:EditIngredientsComponent},
        {path:"listingredients",component:ListIngredientsComponent}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
