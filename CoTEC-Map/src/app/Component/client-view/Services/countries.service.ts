import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../Interfaces/Country';
import { Measures } from '../Interfaces/Measures';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Country[] = [];

  constructor(private httpClient: HttpClient) { }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor country
  // Salida: la informacion del servidor countries
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor worldInformation
  // Salida: la informacion del servidor worldInformation
  getWorldInformation() {
    return this.httpClient.get<Country>('https://localhost:5001/api/v1/cases/world');
  }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor worldInformation
  // Salida: la informacion del servidor worldInformation
  getMeasuresData(code: string) {
    return this.httpClient.get<Measures[]>('https://localhost:5001/api/v1/measures/sanitary?CountryCode=' + code);
  }
}

