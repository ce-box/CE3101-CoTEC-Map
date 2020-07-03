import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  constructor(private http: HttpClient) { }
  getSanitaryMeasureByCountry(country: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/measures/country?CountryCode=${country}`);
  }
  getContainmentMeasureByCountry(country: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/measures/containment?CountryCode=${country}`);
  }
  getSanitaryMeasure(){
    return this.http.get<any[]>('https://localhost:5001/api/v1/measures/all');
  }
  createSanitaryMeasure(bodyR: object){
    this.http.post('https://localhost:5001/api/v1/measures/new', bodyR).subscribe(
      data => {
        console.log('create', data);
        return data;
      }
    );
  }
  assignSanitaryMeause(bodyR: object){
    this.http.post('https://localhost:5001/api/v1/measures/assign', bodyR).subscribe(
      dataR => {
        console.log('assign', dataR);
        return dataR;
      }
    );
  }
  editMeasure(idM: string, dataM: object){
    this.http.patch(`https://localhost:5001/api/v1/measures/edit?Id=${idM}`, dataM).subscribe(
      dataR => {
        console.log('data edit', dataR);
        return dataR;
      }
    );
  }
  editCountryMeasure(){

  }
  disableMeause(idM: string){
    this.http.delete(`https://localhost:5001/api/v1/measures/delete?Id=${idM}`).subscribe(
      dataR => {
        console.log('delete', dataR);
        return dataR;
      }
    );
  }
  disableCountryMeasure(idM: string, CountryCode: string){
    this.http.delete(`https://localhost:5001/api/v1/measures/country/delete?Id=${idM}&Country=${CountryCode}`).subscribe(
      dataR => {
        console.log('disable', dataR);
        return dataR;
      }
    );
  }
}
