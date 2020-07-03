import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PathologiesService {

  constructor(private http: HttpClient) { }

  createPathology(dataP: object){
    return this.http.post('https://localhost:5001/api/v1/pathologies/new', dataP);
  }
  getPathology(){
    return this.http.get<any[]>('https://localhost:5001/api/v1/pathologies/all');
  }
  editPathology(NameP: string, dataP: object){
    return this.http.patch(`https://localhost:5001/api/v1/pathologies/edit?Name=${NameP}`, dataP);
  }
  deletePathology(NameP){
    return this.http.delete(`https://localhost:5001/api/v1/pathologies/delete?Name=${NameP}`);
  }
}
