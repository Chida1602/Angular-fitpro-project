import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-food-child',
  templateUrl: './food-child.component.html',
  styleUrls: ['./food-child.component.css']
})
export class FoodChildComponent {
  @Input() pd: any;
}
