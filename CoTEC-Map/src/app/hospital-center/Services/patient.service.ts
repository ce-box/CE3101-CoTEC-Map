import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient, SendPatient } from '../Interfaces/Patient';
import { Country } from '../Interfaces/Country';
import { Medication } from '../Interfaces/medication';
import { Region } from '../Interfaces/region';
import { Status } from '../Interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor country
  // Salida: la informacion del servidor countries
  getPatientsData(){
    return this.httpClient.get<Patient[]>('https://localhost:5001/api/v1/patients/hospital?hospital_Id=1');
  }

  getPatientData(dniPatient: number) {
    return this.httpClient.get<Patient>('https://localhost:5001/api/v1/patients?Dni=' + dniPatient);
  }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor country
  // Salida: la informacion del servidor countries
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }

  getMedications() {
    return this.httpClient.get<Medication[]>('https://localhost:5001/api/v1/medications/all');
  }

  getPatientMedications(dni: number) {
    return this.httpClient.get<Medication[]>('https://localhost:5001/api/v1/medications/patient?Dni=' + dni);
  }

  getRegionsForContry(code: string) {
    return this.httpClient.get<Region>('https://localhost:5001/api/v1/regions/country?CountryCode=' + code);
  }

  getStatus() {
    return this.httpClient.get<Status[]>('https://localhost:5001/api/v1/status/all');
  }

  postPatient(patient: SendPatient) {
    this.httpClient.post('https://localhost:5001/api/v1/patients/new/list', patient);
  }

}
