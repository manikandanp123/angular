import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-res',
  templateUrl: './add-res.component.html',
  styleUrls: ['./add-res.component.css']
})

export class AddResComponent {
  number: Number
  alert: boolean = false;
  checkboxArr: any = [];
  a = "";
  Object = Object;
  robot = "../../assets/images/robot.png";

  inputvalue: string = "";
  address: string;
  age: string;
  check = true;
  student = {
    name: "PManikandan",
    age: 25,
    place: ["Chennai", "Dindigul"]
  };
  destroy: boolean = true;

  constructor(private restau: AppServiceService, private router: Router) {
    console.log("AddResComponent");
    // this.number = 500;
    // this.hello(this.number);
    // this.hi();
  }

  btnSubmit(input: HTMLInputElement) {
    console.log("value---", input.value);
    this.inputvalue = input.value;
  }

  addresGet(e: any) {
    console.log("e--", e.target.value);
    this.address = e.target.value;
  }
  change(e: any) {
    console.log("e----", e.target.value);
    this.age = e.target.value;
  }
  destroyFn() {
    this.destroy = false;
  }
  rebuild(){
    this.destroy = true;
  }

  hello(d1) {
    console.log("number---", this.number, d1);
  }
  hi() {
    console.log(this.number);
  }

  addRestaurant = new FormGroup({
    name: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
  });



  formSubmitting() {
    this.addRestaurant.value.city = this.checkboxArr;
    this.restau.postdata(this.addRestaurant.value).subscribe((res) => {
      console.log("response -----", res);
      this.addRestaurant.reset({});
      this.alert = true;
      this.router.navigate(['list-res']);
    });
    // console.log("form submit...", this.addRestaurant.value, this.checkboxArr);
  }
  close() {
    this.alert = false;
  }
  public changingCheckbox(event: any) {
    let a1: string[] = this.checkboxArr;
    console.log("e--", event.target.checked, event.target.value);
    if (event.target.checked) {
      let n1: string = event.target.value;
      // this.a1.push(n1);
      // console.log(this.a1);
      a1.push(n1);
    } else {
      let n1: string = event.target.value;
      let index1 = a1.indexOf(n1);
      // delete a1[index1]; // empty will be there if we delete
      a1.splice(index1, 1);
    }
    console.log("a1=====", a1);
    this.checkboxArr = a1;
    // this.a = "mani";
    this.he1234();
  }

  private he1234() {
    console.log("ighj56789 he1234");
  }
  // console.log(checkboxArr);
}


export class Learn {
  readonly n1 = 10000;      // can read only cant edit the values
  private person = {        // can read n edit within the class
    name: "mani",
    age: 24
  };
  public gender = "male";    // can read n edit within n outside the class
  constructor(public a, private b) {
    // this.n1 = 500;
    this.gender = "female";
    this.abc();
  }
  private abc() {
    console.log("private function");
  }
  public() {
    console.log("public function");
  }
}

// let a1 = new Learn("a", "b");
// console.log("reading", a1.gender, a1.n1);
// a1.gender = "others";

// console.log(a1);
// // console.log(a1.person);
// // a1.abc();

// a1.public();
