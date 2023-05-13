import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forumbox',
  templateUrl: './forumbox.component.html',
  styleUrls: ['./forumbox.component.css']
})
export class ForumboxComponent {
  @Input() pd:any;
}
