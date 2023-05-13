import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { TypedetailsComponent } from './user/userhome/dietplan/typedetails/typedetails.component';
import { DietPlanFormComponent } from './admin/diet-plan-form/diet-plan-form.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  //{path:":id",component:TypedetailsComponent},
  {
    path:"add-diet-plan",
    component: DietPlanFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
