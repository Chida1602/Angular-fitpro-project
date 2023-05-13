import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodProductsComponent } from './userhome/food-products/food-products.component';
import { FoodChildComponent } from './userhome/food-products/food-child/food-child.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FiltertypePipe } from '../pipes/filtertype.pipe';
import { DetailsBoxComponent } from './userhome/food-products/food-child/details-box/details-box.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DietplanComponent } from './userhome/dietplan/dietplan.component';
import { ContactComponent } from './userhome/contact/contact.component';
import { DiettypeComponent } from './userhome/dietplan/diettype/diettype.component';
import { DietfilterPipe } from '../pipes/dietfilter.pipe';
import { DietbenefitsComponent } from './userhome/dietplan/diettype/dietbenefits/dietbenefits.component';
import { ForumComponent } from './userhome/forum/forum.component';
import { OwndietComponent } from './userhome/owndiet/owndiet.component';
import { ForumboxComponent } from './userhome/forum/forumbox/forumbox.component';
import { CustomdDirective } from '../directives/customd.directive';



const route:Routes=[
  {path: "detailsbox/:id",component: DetailsBoxComponent},
  {path: "dietbenefits/:id",component: DietbenefitsComponent},
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"food",
      component: FoodProductsComponent
    },
    {
      path:"diet",
      component: DietplanComponent
    },
    {
      path:"help",
      component:ContactComponent
    },
    {
      path:"forum",
      component:ForumComponent
    },
    {
      path:"own",
      component:OwndietComponent
    }

  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    FoodProductsComponent,
    FoodChildComponent,
    FiltertypePipe,
    DetailsBoxComponent,
    DietplanComponent,
    ContactComponent,
    DiettypeComponent,
    DietfilterPipe,
    DietbenefitsComponent,
    ForumComponent,
    OwndietComponent,
    ForumboxComponent,
    CustomdDirective

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
  ],
  // exports:[RouterModule]
})
export class UserModule { }
