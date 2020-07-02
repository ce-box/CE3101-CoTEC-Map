import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Services/patient.service';


@Component({
  selector: 'app-latest-patients',
  templateUrl: './latest-patients.component.html',
  styleUrls: ['./latest-patients.component.scss']
})
export class LatestPatientsComponent implements OnInit {


  pageName = 'Lista de Pacientes';

  // Change page
  changePatientPage = false;
  dniPatient: number;

  // Patient list
  patients: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: PatientService) {}

  ngOnInit(): void {
    this._http.getPatientsData().subscribe(data => {
      this.patients = data;
    });
  }

  // Chage the page to the information patient
  changePage(dniPatient: number){
    this.changePatientPage = true;
    this.dniPatient = dniPatient;
  }

}
