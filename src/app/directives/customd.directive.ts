import { Directive ,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustomd]'
})
export class CustomdDirective {

  constructor(private e:ElementRef) { 
    this.e.nativeElement.style.color="#fff";
  }
}
