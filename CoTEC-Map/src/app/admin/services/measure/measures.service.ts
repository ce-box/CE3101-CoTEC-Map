import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  constructor(private http: HttpClient) { }
  getSanitaryMeasureByCountry(country: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/measures/sanitary?CountryCode=${country}`);
  }
  getContainmentMeasureByCountry(country: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/measures/containment?CountryCode=${country}`);
  }
}
