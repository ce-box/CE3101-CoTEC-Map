import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private URL: 'localhost:3000';
  /**
   * Constructor
   * @param http http request
   */
  constructor(private http: HttpClient) { }

  getServiceData(){
    return this.http.get(`${URL}/admin`);
  }
}
