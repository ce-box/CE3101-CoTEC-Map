import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private httpClient: HttpClient) { }

  // Get country information
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }

  // Get world Information
  getWorldInformation() {
    return this.httpClient.get<Country>('https://localhost:5001/api/v1/cases/world');
  }

  getCoutryReport() {
    return this.httpClient.get('https://localhost:5001/api/v1/cases/report');
  }
}
