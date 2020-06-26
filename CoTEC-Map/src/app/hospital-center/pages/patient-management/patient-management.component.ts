import { Component, OnInit, Input } from '@angular/core';

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

  // List information
  patient: any;
  contacts: any;

  constructor() {
    this.patient = {
      name: 'Olman',
      lastName: 'Castro Hernández',
      dni: '207840516',
      age: 21,
      nationality: 'Costa Rica',
      state: 'Crítico',
      region: 'Heredia',
      internship: 'Sí',
      UCI: 'Sí',
      medication: [
        { house: 'Bayer', medicine: 'Alive' },
        { house: 'Bayer', medicine: 'Alive' },
        { house: 'Bayer', medicine: 'Aspirina' },
      ],
      pathology: ['Hipertensión', 'diavetes', 'asma'],
    };

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

  ngOnInit(): void {}

  // Change the page to create contacts
  changePage(dniContact: number){
    this.changeContactPage = true;
    this.dniContact = dniContact;
  }

  // Change the page to edit patient
  changeEditPage( ){
    this.changeEditPatientPage = true;
  }
}
