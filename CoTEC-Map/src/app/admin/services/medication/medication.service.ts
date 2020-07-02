import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private http: HttpClient) { }
  /**
   * Get all the medications
   */
  getMedications(){
    return this.http.get<any[]>('https://localhost:5001/api/v1/medications/all');
  }
  /**
   * Get all the Pharmacy houses
   */
  getPharmacyHouses(){
    return this.http.get<any[]>('https://localhost:5001/api/v1/medications/companies');
  }
  /**
   * Create a medication
   * @param bodyM medication object
   */
  createMedication(bodyM: object){
    this.http.post(`https://localhost:5001/api/v1/medications/new`, bodyM).subscribe(
      data => {
        console.log('medication', data);
        return data;
      }
    );
  }
  /**
   * Edit a medication
   * @param bodyM Body to change
   * @param idM id of the medication
   */
  EditMedication(bodyM: object, idM: string){
    return this.http.patch(`https://localhost:5001/api/v1/medications/edit?Id=${idM}`, bodyM);
  }
  /**
   * Delete the medication
   * @param idM id of the medication
   */
  deleteMedication(idM: string){
    return this.http.delete(`https://localhost:5001/api/v1/medications/delete?Id=${idM}`);
  }
}
