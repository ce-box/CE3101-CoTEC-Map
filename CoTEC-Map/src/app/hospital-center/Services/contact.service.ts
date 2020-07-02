import { Injectable } from '@angular/core';
import { Country } from '../Interfaces/Country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  // Entrada: ninguna
  // Función: conecta con la direción del servidor country
  // Salida: la informacion del servidor countries
  getContriesData() {
    return this.httpClient.get<Country[]>('https://localhost:5001/api/v1/cases/country/all');
  }
}
