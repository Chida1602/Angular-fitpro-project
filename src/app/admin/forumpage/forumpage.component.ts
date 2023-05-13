import { Component } from '@angular/core';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'app-forumpage',
  templateUrl: './forumpage.component.html',
  styleUrls: ['./forumpage.component.css']
})
export class ForumpageComponent {
  forums:any;
  com:any;
  
  constructor(private fs:DiscussionService){
      fs.getForum().subscribe({
        next:(data:any)=>this.forums = data,
        error:()=>this.forums=[]
      })
  }
  ngOnInit(){
    this.fs.getForum().subscribe({
      next:(data:any)=>this.forums = data,
      error:()=>this.forums=[]
    })
  }

  onPost(){
    let obj ={
      "usernmae":sessionStorage.getItem("username"),
      "comment":this.com
    }
    this.fs.postForum(obj).subscribe({
      next:()=>{this.ngOnInit()
      this.com=""
    },
      error:()=>alert("Error on posting")
    })
    // window.location.reload()

  }

}
