import { Component } from '@angular/core';
import { DiettypeService } from 'src/app/services/diettype.service';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent {
  types=[
    "All",
    "Ketogenic diet",
    "Mediterranean diet",
    "South Beach Diet",
    "Gluten-free diet",
    "Mayo Clinic Diet",
    "Low-fat diet",
    "Plant-based diet",
    "Vegan Diet",
    "Zone diet",
    "Diabetic diet",
    "Dukan Diet"
  ]
  selected="All";
  names:any;
 
      constructor(hs:DiettypeService){
      hs.getDairyProducts().subscribe(
          {
            next: (data:any)=> (this.names =data),
            error: ()=> (this.names= []),
          });
          
          
      }
}
