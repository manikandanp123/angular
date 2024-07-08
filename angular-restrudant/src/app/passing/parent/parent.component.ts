import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name = "Pmani";
  age = 25;
  image = "../../../assets/images/robot.png";
  fname = "";
  counter = 0;

  afterDoubling = 0;

  constructor() { }

  changing(e: any) {
    console.log("changing value--", e.target.value);
  }

  submit(e: any) {
    console.log("clicked--", e);
  }
  increment() {
    this.counter = this.counter + 1;
  }
  decrement() {
    this.counter--;
  }

  fromChild(data: any) {
    console.log("fromChild-------", data);
    this.afterDoubling = data;
  }

}
