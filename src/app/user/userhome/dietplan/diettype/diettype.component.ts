import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diettype',
  templateUrl: './diettype.component.html',
  styleUrls: ['./diettype.component.css']
})
export class DiettypeComponent {
  @Input() products:any;
}
