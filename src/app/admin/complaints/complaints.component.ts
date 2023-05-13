import { Component } from '@angular/core';
import { ComplaintsService } from 'src/app/services/complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  names:any;
  searchtext: any;
;
  constructor(private ns:ComplaintsService){
    this.ns.getcomplaint().subscribe({
      next: (data :any)=>this.names=data,
      error: () => this.names=[]
    })
  }
}
