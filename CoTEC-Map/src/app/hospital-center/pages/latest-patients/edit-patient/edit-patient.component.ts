import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  @Input() dniPatient: number;
  pageName = 'Editar Paciente';
  changeContactPage = false;
  changeEditPatientPage = false;
  patient: any;
  dniContact: number;

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
  }

  ngOnInit(): void {
  }

  // Change the page to create contacts
  changePage(dniContact: number){
    this.changeContactPage = true;
    this.dniContact = dniContact;
  }

  // Change the page to create contacts
  changeEditPage( ){
    this.changeEditPatientPage = true;
  }

}
