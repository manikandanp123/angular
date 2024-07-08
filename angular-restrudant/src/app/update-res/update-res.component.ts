import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-update-res',
  templateUrl: './update-res.component.html',
  styleUrls: ['./update-res.component.css']
})
export class UpdateResComponent {
  id: any;
  updateAlert: boolean = false;
  updateData = new FormGroup({
    name: new FormControl(''),
    place: new FormControl(''),
    email: new FormControl(''),
  })
  constructor(private route: ActivatedRoute, private update: AppServiceService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.update.getOneData(this.id).subscribe(data => {
      // console.log("getOneData---------", data);
      let d1: any = data;
      // console.log("d1---", typeof d1, d1.name);
      this.updateData = new FormGroup({
        name: new FormControl(d1['name']),
        place: new FormControl(d1['place']),
        email: new FormControl(d1['email']),
      })
    })
  }
  updateForm() {
    let d2 = this.updateData.value;
    console.log("BEFORE updated data----", d2);
    this.update.updateData(this.id, d2).subscribe(data => {
      console.log("updated data-----", data);
      this.router.navigate(["list-res"]);
    })
    this.updateAlert = true;
  }
  close() {
    this.updateAlert = false;
  }
}
