import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComplaintsService } from 'src/app/services/complaints.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  stateCtrl = new FormControl('');
 
  fname:any;
  email:any;
  message:any;
  product:any;
  errors:string[] = [];
  
  constructor(private cs:ComplaintsService){
   
    // 
    
    //
  }
  
  //
  ngOnInit(): void {
  }
  submit(){
    this.errors=[]
    if(this.errors.length==0){
      let obj={
        id:Math.round(Math.random()*100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product:this.product
      }
      this.cs.postComplaint(obj).subscribe({
        next:()=>{
          console.log(obj)
          alert("Your complaint is raised")
            this.fname="",
            this.email="",
            this.message="",
            this.product=""
          },
          error: ()=>alert("Your Compliant is Raised :)")
        }
        )
      }
  }
  //
}


