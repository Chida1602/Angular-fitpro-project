import { Component, Input } from '@angular/core';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'app-forumpagebox',
  templateUrl: './forumpagebox.component.html',
  styleUrls: ['./forumpagebox.component.css']
})
export class ForumpageboxComponent {
  @Input() pd:any;
  // reply() {
  //   // Add your reply logic here
  //   console.log('Reply button clicked');
  isReply=false;
  replyText = '';
  constructor(private us:DiscussionService){

  }
  reply() {
    if(this.isReply == false){
      this.isReply = true;
    }
    else{
      this.isReply = false;
    }
    console.log('Reply button clicked');
  }
  submitReply() {
    let un = sessionStorage.getItem("username");
    let rl = this.pd.reply;
    let obj = {
      "usernmae":un,
      "comment": this.replyText
    }
    rl.push(obj)
    this.us.updateForum({"reply":rl},this.pd.id).subscribe({
      next:()=>{alert("reply successful")},
      error:()=>{alert("reply failed")}
    })
    this.replyText = ""
    this.isReply = false;
  }

}
