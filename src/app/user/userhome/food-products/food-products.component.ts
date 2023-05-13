import { Component } from '@angular/core';
import { DisplayallService } from 'src/app/services/displayall.service';

@Component({
  selector: 'app-food-products',
  templateUrl: './food-products.component.html',
  styleUrls: ['./food-products.component.css']
})
export class FoodProductsComponent {
  names:any;
  searchtext: any;
  types =['All','Dairy products','Fats, Oils, Shortenings', 'Meat, Poultry' ,'Fish, Seafood','Vegetables A-E','Vegetables F-P','Vegetables R-Z','Fruits A-F','Fruits G-P','Fruits R-Z','Breads, cerals, fastfood,grains','Soups','Desserts,sweets','jams, jellies','Seeds and Nuts','Drinks,Alcohol, Beverages']
  selected='All';

  constructor(private ns:DisplayallService){
    this.ns.getdisplayall().subscribe({
      next: (data :any)=>this.names=data,
      error: () => this.names=[]
    })
  }
}

