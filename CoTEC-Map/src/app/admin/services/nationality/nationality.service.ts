import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {
  /**
   * URl to get the nationalities
   */
  private URL: 'http://restcountries.herokuapp.com/api/v1';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  /**
   * Get the countries by an API
   */
  async getCountries(){
    console.log('no she');
    return await this.http.get(this.URL, this.httpOptions).subscribe(data => {
      console.log('data', data);
    });
  }
}
