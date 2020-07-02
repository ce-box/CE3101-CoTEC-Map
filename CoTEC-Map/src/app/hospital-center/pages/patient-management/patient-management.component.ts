import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../../Services/patient.service';
import { Medication } from '../../Interfaces/medication';
import { Pathologys } from '../../Interfaces/pathologys';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.scss'],
})
export class PatientManagementComponent implements OnInit {
  // Patient dni, Contact dni
  @Input() dniPatient: number;
  dniContact: number;

  pageName = 'Paciente';

  // Change pages
  changeContactPage = false;
  changeEditPatientPage = false;
  changeContactInformation = false;

  // List information
  patient: any;
  contacts: any;
  medication: Medication[];
  pathology: Pathologys[];

  // tslint:disable-next-line: variable-name
  constructor(private _http: PatientService) {

      this.pathology = [
        {name: 'Hipertensión', treatment: '', symptoms: '', description: ''},
        {name: 'diavetes', treatment: '', symptoms: '', description: ''},
        {name: 'asma', treatment: '', symptoms: '', description: ''}
      ],


    this.contacts = [
      {
        name: 'Daniel',
        lastName: 'Castro Hernández',
        dni: '207840600',
        age: 15,
        nationality: 'Costa Rica',
        address: 'Ssrapiquí, Heredía',
        email: 'kstro379@hotmail.com',
        pathology: ['Hipertensión', 'diavetes', 'asma'],
      },
      {
        name: 'Daniel',
        lastName: 'Castro Hernández',
        dni: '207840600',
        age: 15,
        nationality: 'Costa Rica',
        address: 'Ssrapiquí, Heredía',
        email: 'kstro379@hotmail.com',
        pathology: ['Hipertensión', 'diavetes', 'asma'],
      },
      {
        name: 'Daniel',
        lastName: 'Castro Hernández',
        dni: '207840600',
        age: 15,
        nationality: 'Costa Rica',
        address: 'Ssrapiquí, Heredía',
        email: 'kstro379@hotmail.com',
        pathology: ['Hipertensión', 'diavetes', 'asma'],
      },
      {
        name: 'Daniel',
        lastName: 'Castro Hernández',
        dni: '207840600',
        age: 15,
        nationality: 'Costa Rica',
        address: 'Ssrapiquí, Heredía',
        email: 'kstro379@hotmail.com',
        pathology: ['Hipertensión', 'diavetes', 'asma'],
      },
    ];
  }

  ngOnInit(): void {
    this._http.getPatientData(this.dniPatient).subscribe(data => {
      this.patient = data;
    });

    this._http.getPatientMedications(this.dniPatient).subscribe(data => {
      this.medication = data;
    });
  }

  // Change the page to create contacts
  changePage(dniContact: number){
    this.changeContactPage = true;
    this.dniContact = dniContact;
  }

  // Change the page to edit patient
  changeEditPage( ){
    this.changeEditPatientPage = true;
  }

  // Change the page to contact information
  changeinformationContactPage(dni: number){
    this.dniContact = this.dniContact;
    this.changeContactInformation = true;
  }
}
