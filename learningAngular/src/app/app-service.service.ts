import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {
  url = 'http://localhost:3000/restaurant';
  constructor(private http: HttpClient) { }
  handleError(data: any) {
    // console.log("dtaa")
  }

  getData(): Observable<unknown> {
    return this.http.get(`${this.url}`, {
      headers: new HttpHeaders({
        "custom-header": "pmanikandan"
      })
    })
  }

  getOneData(id: any) {
    return this.http.get(`${this.url}/${id}`, {
      headers: new HttpHeaders({
        "custom-header": "pmanikandan"
      })
    });
  }

  postdata(data: any) {
    console.log("data-------", data);
    return this.http.post(this.url, data, {});
  }

  updateData(id: any, data: any) {
    console.log("updating in api -----", id, "---------------", data);
    return this.http.put(
      `${this.url}/${id}`,
      data,
      {
        headers: new HttpHeaders({
          "custom-header": "pmanikandan"
        })
      }
    );
  }

  deleteData(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
