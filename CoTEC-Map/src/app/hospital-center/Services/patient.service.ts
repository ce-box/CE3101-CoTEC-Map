import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../Interfaces/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor country
  // Salida: la informacion del servidor countries
  getPatientData(){
    return this.httpClient.get<Patient[]>('https://localhost:5001/api/v1/patients/hospital?hospital_Id=1');
  }
}
