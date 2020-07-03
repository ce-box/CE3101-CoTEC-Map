import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }
  getHospitals(){
    return this.http.get<any[]>('https://localhost:5001/api/v1/hospitals/all');
  }
  getHospitalByCountry(idC: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/hospitals/country?Country=${idC}`);
  }
  getHospitalByID(idH: string){
    return this.http.get<any[]>(`https://localhost:5001/api/v1/hospitals?Id=${idH}`);
  }
  createHospital(bodyH: object){
    return this.http.post('https://localhost:5001/api/v1/hospitals/new', bodyH).subscribe(
      dataR => {
        console.log('create', dataR);
        return dataR;
      }
    );
  }
  editHospital(idH: string, bodyH: object){
    this.http.patch(`https://localhost:5001/api/v1/hospitals/edit?Id=${idH}`, bodyH).subscribe(
      dataR => {
        console.log('edit', dataR);
        return dataR;
      }
    );
  }
  deleteHospital(idH: string){
    this.http.delete(`https://localhost:5001/api/v1/hospitals/delete?Id=${idH}`).subscribe(
      dataR => {
        console.log('delete', dataR);
        return dataR;
      }
    );
  }
}
