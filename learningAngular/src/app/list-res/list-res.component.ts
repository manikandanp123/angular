import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-list-res',
  templateUrl: './list-res.component.html',
  styleUrls: ['./list-res.component.css']
})
export class ListResComponent {
  allData: any;

  constructor(private http: AppServiceService) {
    let d1 = this.http.getData().subscribe(data => {
      console.log('All data------', data);
      this.allData = data;
    })
  }

  getInitialData() {
    let d1 = this.http.getData().subscribe(data => {
      console.log('All Initial data------', data);
      this.allData = data;
    })
  }

  deleteData(id: any) {
    console.log("id---", id);
    let res = this.http.deleteData(id).subscribe(data => {
      console.log("deleted data res---", data);
      this.getInitialData()
    })
  }
}
