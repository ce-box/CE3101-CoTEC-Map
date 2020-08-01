import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private URL: '/administration/';
  /**
   * Constructor
   * @param http http request
   */
  constructor(private http: HttpClient) { }

  getServiceData(){
    return this.http.get(`${URL}/admin`);
  }
  uploadData(data: any){
    console.log('data-> ', data);
    this.http.post('https://localhost:5001/api/v1/patients/excel', data)
    .subscribe((response) => {
        console.log('response received is ', response);
      });
  }
}
