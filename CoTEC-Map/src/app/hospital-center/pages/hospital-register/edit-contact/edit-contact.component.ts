import { Component, OnInit, Input } from '@angular/core';
import { Pathologys } from '../contacts/pathologys';
import { Contact } from '../contacts/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  // Patient dni, Contact dni
  @Input() dniPatient: number;
  dniContact: number;

  pageName = 'Contacto';

  // Change page
  changeEditContactPage = false;

  // Data list
  pathologys: Pathologys[];
  pathologysList: any[] = [];
  contactList: any[] = [];
  countrys: any;
  patient: any;

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

    this.countrys = ['Costa Rica', 'El Salvador', 'Nicaragua', 'Panamá'];
    this.pathologys = [
      {
        name: 'Presión',
        treatment: 'este',
        symptoms: ['h'],
        description: 'esta',
      },
      {
        name: 'Node Js',
        treatment: 'este',
        symptoms: ['j'],
        description: 'esta',
      },
      { name: 'Java', treatment: 'este', symptoms: ['k'], description: 'esta' },
    ];
  }

  ngOnInit(): void {}

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

  // Get the values for the forms and incluide in the table
  getContactValue(name: string, lastName: string, age: string, email: string, address: string, dni: number, country: string): void {
    const temporal = this.pathologysList;
    const contact: Contact = {name, lastName, age, email, address, dni, country, pathologys: temporal};
    console.log(contact);
    const i = this.contactList.indexOf(contact);

    if (i === -1) {
      this.contactList.push(contact);
      console.log(this.contactList);
    }
  }

  // Change the page to edit contact
  changeEditPage( ){
    this.changeEditContactPage = true;
  }
}
