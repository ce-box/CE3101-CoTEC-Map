import { Injectable } from '@angular/core';
import { Country } from '../Interfaces/Country';
import { HttpClient } from '@angular/common/http';
import { Pathologys } from '../Interfaces/pathologys';
import { Contact } from '../Interfaces/contact';
import { Region } from '../Interfaces/region';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  // This funtion get a contact informations
  getContact(dni: number) {
    return this.httpClient.get<Contact[]>('https://localhost:5001/api/v1/contacts?Dni=' + dni);
  }

  // This funtion get list of countrys
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }

  // This funtion Get a Country regions
  getRegionsForContry(code: string) {
    return this.httpClient.get<Region>('https://localhost:5001/api/v1/regions/country?CountryCode=' + code);
  }

  // This funtion get list of pathologys
  getPathologys() {
    return this.httpClient.get<Pathologys[]>('https://localhost:5001/api/v1/pathologies/all');
  }

  // This funtion get a contact pathologys
  getContactPathologys(dni: number) {
    return this.httpClient.get<Pathologys[]>('https://localhost:5001/api/v1/pathologies/contact?Dni=' + dni);
  }

  // This funtion add contact to the patient
  postContacts(contact: object, dni: number) {
    this.httpClient.post('https://localhost:5001/api/v1/contacts/new?Dni=' + dni, contact).subscribe();
  }

  postPathology(pathology: object) {
    this.httpClient.post('https://localhost:5001/api/v1/pathologies/contacts/assign', pathology).subscribe();
  }

  // This funtion delete a contact
  deleteContact(dni: number) {
    this.httpClient.delete('https://localhost:5001/api/v1/contacts/delete?Dni=' + dni).subscribe();
  }
}
