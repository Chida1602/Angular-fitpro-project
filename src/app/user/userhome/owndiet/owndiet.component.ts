import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

import { ItemsfoodService } from 'src/app/services/itemsfood.service';

@Component({
  selector: 'app-owndiet',
  templateUrl: './owndiet.component.html',
  styleUrls: ['./owndiet.component.css']
})
export class OwndietComponent {
  fontStyle?: string;
  products: any;
  constructor(private ps:ItemsfoodService) {
    console.log('Constructor called');
    this.ps.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products received:', data);
      },
      error: () => {
        this.products = [];
        console.log('Error occurred while fetching products');
      }
    });
  }
  basket: any[] = [];
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const draggedItem = event.previousContainer.data[event.previousIndex];
      const itemName = typeof draggedItem === 'object' ? draggedItem.name : draggedItem;
      const itemQuantity = typeof draggedItem === 'object' ? draggedItem.quantity : 1;
      this.basket.splice(event.currentIndex, 0, { name: itemName, quantity: itemQuantity });
    }
  }
  clearBasket() {
    this.basket = [];
  }
  totalCalories: number = 0;
  totalFat: number = 0;
  totalProtein: number = 0;
  totalCarbs: number = 0;
  totalFiber:number=0;
  calculateNutrition() {
    this.totalCalories = 0;
    this.totalFat = 0;
    this.totalProtein = 0;
    this.totalCarbs = 0;
    this.totalFiber=0;
    for (let item of this.basket) {
      const product = this.products.find((p: { name: any; }) => p.name === item.name);
      if (product) {
        const { Calories, Fat, Protein, Carbs ,Fiber} = product;
        this.totalCalories += (item.quantity / 100) * Calories;
        this.totalFat += (item.quantity / 100) * Fat;
        this.totalProtein += (item.quantity / 100) * Protein;
        this.totalCarbs += (item.quantity / 100) * Carbs;
        this.totalFiber +=(item.quantity / 100)*Fiber;
      } else {
        console.log(`Product not found for item ${item.name}`);
      }
    }
  }  
}



