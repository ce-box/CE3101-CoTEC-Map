import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private URL: 'https://localhost:5001/api/v1/';
  /**
   * Constructor
   * @param http http request
   */
  constructor(private http: HttpClient) { }
  getRegions(country: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/regions/country?CountryCode=${country}`);
  }
  async getRegionsO(country: string){
    return await this.http.get<any[]>(`https://localhost:5001/api/v1/regions/country?CountryCode=${country}`).toPromise();
  }
  createRegion(bodyRegion: object){
    this.http.post(`https://localhost:5001/api/v1/regions/new`, bodyRegion)
    .subscribe((response) => {
      console.log('response', response);
      return response;
    });
  }
  getCountries(){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/countries/all`);
  }
  deleteRegion(bodyRegion: object){
    console.log('bodu', bodyRegion);
   return this.http.delete(`https://localhost:5001/api/v1/regions/delete?name=${bodyRegion['name']}&Country=${bodyRegion['country']}`);
  }
}
