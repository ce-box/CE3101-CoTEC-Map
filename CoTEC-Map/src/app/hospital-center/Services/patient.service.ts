import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient, SendPatient } from '../Interfaces/Patient';
import { Country } from '../Interfaces/Country';
import { Medication } from '../Interfaces/medication';
import { Region } from '../Interfaces/region';
import { Status } from '../Interfaces/status';
import { Pathologys } from '../Interfaces/pathologys';
import { Contact } from '../Interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  // This funtion get a list of patient
  getPatientsData(id: number){
    return this.httpClient.get<Patient[]>('https://localhost:5001/api/v1/patients/hospital?hospital_Id=' + id);
  }

  getPatientRawData(dni: number){
    return this.httpClient.get('https://localhost:5001/api/v1/patients/raw?Dni=' + dni);
  }

  // This funtion get a Patient data
  getPatientData(dniPatient: number) {
    return this.httpClient.get<Patient>('https://localhost:5001/api/v1/patients?Dni=' + dniPatient);
  }

  // This funtion get a list to country information
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }

  // This funtion get a medicine list
  getMedications() {
    return this.httpClient.get<Medication[]>('https://localhost:5001/api/v1/medications/all');
  }

  // This funtion get a patient medication
  getPatientMedications(dni: number) {
    return this.httpClient.get<Medication[]>('https://localhost:5001/api/v1/medications/patient?Dni=' + dni);
  }

  // This funtion get list of pathologys
  getPathologys() {
    return this.httpClient.get<Pathologys[]>('https://localhost:5001/api/v1/pathologies/all');
  }

  // This funtion get a patient pathologys
  getPatientPathologys(dni: number) {
    return this.httpClient.get<Pathologys[]>('https://localhost:5001/api/v1/pathologies/patient?Dni=' + dni);
  }

  // This funtion Get a Country regions
  getRegionsForContry(code: string) {
    return this.httpClient.get<Region>('https://localhost:5001/api/v1/regions/country?CountryCode=' + code);
  }

  // This funtion get a status of patients
  getStatus() {
    return this.httpClient.get<Status[]>('https://localhost:5001/api/v1/status/all');
  }

  // This funtion get a status of patients
  getContacts(dni: number) {
    return this.httpClient.get<Contact[]>('https://localhost:5001/api/v1/contacts/patient?Dni=' + dni);
  }

  // This funtion create a patients in data base
  postPatient(patient: SendPatient) {
    return this.httpClient.post('https://localhost:5001/api/v1/patients/new', patient).subscribe();
  }

  // This funtion add pathology to the patient
  postPathology(pathology: object) {
    console.log(pathology);
    this.httpClient.post('https://localhost:5001/api/v1/pathologies/patient/assign', pathology).subscribe();
  }

  // This funtion add medicine to the patient
  postMedicine(medicine: object) {
    console.log(medicine);
    this.httpClient.post('https://localhost:5001/api/v1/medications/patient/assign/list', medicine).subscribe();
  }

  // This funtion delete a patient
  deletePatient(dni: number) {
    this.httpClient.delete('https://localhost:5001/api/v1/patients/delete?Dni=' + dni).subscribe();
  }

  pacthPatient(patient: object, dni: number) {
    this.httpClient.patch('https://localhost:5001/api/v1/patients/edit?Dni=' + dni, patient).subscribe();
  }

}
