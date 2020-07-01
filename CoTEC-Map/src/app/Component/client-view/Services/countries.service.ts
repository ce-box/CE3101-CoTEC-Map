import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor country
  // Salida: la informacion del servidor countries
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }
}
