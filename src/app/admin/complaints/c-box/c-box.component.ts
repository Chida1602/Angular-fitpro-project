import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-box',
  templateUrl: './c-box.component.html',
  styleUrls: ['./c-box.component.css']
})
export class CBoxComponent {
  @Input() pd: any;
}
