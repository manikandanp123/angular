import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  constructor(private ele: ElementRef) {
    ele.nativeElement.style.color = "green";
    this.changeText();
  }

  changeText() {
    // this.ele.nativeElement.innerText = "HI PMani ";
  }

}
