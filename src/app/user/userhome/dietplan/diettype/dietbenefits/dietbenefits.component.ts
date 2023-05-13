import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiettypeService } from 'src/app/services/diettype.service';

@Component({
  selector: 'app-dietbenefits',
  templateUrl: './dietbenefits.component.html',
  styleUrls: ['./dietbenefits.component.css']
})
export class DietbenefitsComponent {
  id:any;
  details1:any;
  constructor(private Ds:DiettypeService,private ar:ActivatedRoute){
    
  this.ar.params.subscribe(
  {
  next: (params)=>{ 
     this.id =params['id']
    this.readData()
  },
  error: () => this.id = 0
   }
  )
}

   readData(){
   this.Ds.getDetails(this.id).subscribe(
        {
        next: (data:any)=>this.details1=data,
        error: ()=> this.details1 = {}
     }
    )
 }
 
}
