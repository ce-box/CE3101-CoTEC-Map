import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-patients',
  templateUrl: './latest-patients.component.html',
  styleUrls: ['./latest-patients.component.scss']
})
export class LatestPatientsComponent implements OnInit {

  pageName = 'Lista de Pacientes';
  patients: any;
  changePatientPage = false;
  dniPatient: number;

  constructor() {
    this.patients = [
      {code: 207840516, name: 'Olman', lastName: 'Castro Hernández' },
      {code: 207840514, name: 'Bertha', lastName: 'Castro Hernández' },
      {code: 207840534, name: 'Esteban', lastName: 'Castro Hernández' },
      {code: 207840512, name: 'Randall', lastName: 'Castro Hernández' },
      {code: 207840516, name: 'Olman', lastName: 'Castro Hernández' },
      {code: 207840514, name: 'Bertha', lastName: 'Castro Hernández' },
      {code: 207840534, name: 'Esteban', lastName: 'Castro Hernández' },
      {code: 207840512, name: 'Randall', lastName: 'Castro Hernández' },
      {code: 207840516, name: 'Olman', lastName: 'Castro Hernández' },
      {code: 207840514, name: 'Bertha', lastName: 'Castro Hernández' },
      {code: 207840534, name: 'Esteban', lastName: 'Castro Hernández' },
      {code: 207840512, name: 'Randall', lastName: 'Castro Hernández' }
    ];
  }

  ngOnInit(): void {
  }

  changePage(dniPatient: number){
    this.changePatientPage = true;
    this.dniPatient = dniPatient;
  }

}
