import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() "inputFromParent": string;
  @Input() "counterValue": Number;

  @Output() "doubleOfCounter" = new EventEmitter<any>();

  name = "";
  a=10;
  b=10;

  constructor() {
  }

  getdata() {
    console.log(this.inputFromParent);
  }
  sendDataToParent() {
    // console.log("first", Number(this.counterValue), typeof 2)
    this.doubleOfCounter.emit(Number(this.counterValue) * 2)
  }
}
