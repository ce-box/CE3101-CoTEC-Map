import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }
  async getStatus(){
    return await this.http.get<any[]>('https://localhost:5001/api/v1/status/all').toPromise();
  }
  createStatus(dataS: object){
    this.http.post('https://localhost:5001/api/v1/status/new', dataS).subscribe(
      dataR => {
        console.log('create', dataR);
        return dataR;
      }
    );
  }
  editStatus(idS: string, dataS){
    this.http.patch(`https://localhost:5001/api/v1/status/edit?Id=${idS}`, dataS).subscribe(
      dataR => {
        console.log('edit', dataR);
        return dataR;
      }
    );
  }
  deleteStatus(idS: string){
    this.http.delete(`https://localhost:5001/api/v1/status/delete?Id=${idS}`).subscribe(
      dataR => {
        console.log('delete', dataR);
        return dataR;
      }
    );
  }
}
