import { Component, OnInit, Input } from '@angular/core';
import { Pathologys } from '../../../Interfaces/pathologys';
import { Medication } from '../../../Interfaces/medication';
import { PatientService } from 'src/app/hospital-center/Services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  // Patient dni, Contact dni
  @Input() dniPatient: number;

  pageName = 'Editar paciente';

  // Data lists
  pathologys: Pathologys[];
  medication: Medication[];
  pathologysList: any[] = [];
  medicationList: any[] = [];
  states: any;
  countrys: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: PatientService) {

    this.states = ['Activa', 'Contagiada', 'Recuperada', 'Muerta'];
    this.countrys = ['Costa Rica', 'El Salvador', 'Nicaragua', 'Panamá'];
    this.pathologys = [
      {
        name: 'Presión',
        treatment: 'este',
        symptoms: 'h',
        description: 'esta',
      },
      {
        name: 'Node Js',
        treatment: 'este',
        symptoms: 'j',
        description: 'esta',
      },
      { name: 'Java', treatment: 'este', symptoms: 'k', description: 'esta' },
    ];
  }

  ngOnInit(): void {
    this._http.getPatientMedications(this.dniPatient).subscribe(data => {
      this.medication = data;
    });
  }

  // Add a pathology in the list for send to Data Base
  getPathologyValue(value: Pathologys[]): void {
    const i = this.pathologysList.indexOf(value);

    if (i === -1) {
      this.pathologysList.push(value);
    }

  }

  // Delete a pathology for the list
  deletePathology(value: Pathologys): void {
    const i = this.pathologysList.indexOf(value);

    if (i !== -1) {
      this.pathologysList.splice(i, 1);
    }
  }

  // Add a medicine in the list for send to Data Base
  getMedicineValue(value: Medication[]): void {
    const i = this.medicationList.indexOf(value);

    if (i === -1) {
      this.medicationList.push(value);
    }

  }

  // Delete a medicine for the list
  deleteMedicine(value: Medication): void {
    const i = this.medicationList.indexOf(value);

    if (i !== -1) {
      this.medicationList.splice(i, 1);
    }
  }
}

