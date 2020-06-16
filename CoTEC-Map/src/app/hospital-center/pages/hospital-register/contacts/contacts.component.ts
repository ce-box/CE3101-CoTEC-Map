import { Component, OnInit, Input } from '@angular/core';
import { Pathologys } from './pathologys';
import { Contact } from './contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() dniContact: number;

  pathologys: Pathologys[];
  pathologysList: any[] = [];
  contactList: any[] = [];
  pageName = 'Crear Contacto';
  states: any;
  countrys: any;

  constructor() {

    this.states = ['Activa', 'Contagiada', 'Recuperada', 'Muerta'];
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

  getContactValue(name: string, lastname: string, age: string, email: string, address: string, dni: number, country: string): void {
    const temporal = this.pathologysList;
    const contact: Contact = {name, lastname, age, email, address, dni, country, pathologys: temporal};
    console.log(contact);
    const i = this.contactList.indexOf(contact);

    if (i === -1) {
      this.contactList.push(contact);
      console.log(this.contactList);
    }
  }

  // Delete a contact for the list
  deleteContact(value: Contact): void {
    const i = this.contactList.indexOf(value);

    if (i !== -1) {
      this.contactList.splice(i, 1);
      console.log(this.contactList);
    }
  }

  // Send a contact for the Data Base
  sendContact(): void {
    if ((this.contactList.length)  !==  0 ) {
      console.log(this.contactList);
    }
  }

}
