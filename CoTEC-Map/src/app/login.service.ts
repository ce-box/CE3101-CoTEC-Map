import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // This funtion add contact to the patient
  postAdminLogin(userName1: string, password1: string) {
    return this.httpClient.post('https://localhost:5001/api/v1/login/admin', {userName: userName1, password: password1});
  }

  // This funtion add contact to the patient
  postHopitalLogin(userName1: string, password1: string) {
    return this.httpClient.post('https://localhost:5001/api/v1/login/hospital', {userName: userName1, password: password1});
  }
}
