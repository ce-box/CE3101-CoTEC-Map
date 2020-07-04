import { Component, OnInit, Input } from '@angular/core';
import { Pathologys } from 'src/app/hospital-center/Interfaces/pathologys';
import { ContactService } from 'src/app/hospital-center/Services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  // Patient dni, Contact dni
  @Input() dniContact: number;

  pageName = 'Contacto';

  // Change page
  changeEditContactPage = false;

  // Data list
  pathologys: Pathologys[];
  pathologysList: any[] = [];
  contactList: any[] = [];
  countrys: any;
  patient: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: ContactService) { }


  ngOnInit(): void {
    console.log(this.dniContact);
    this._http.getContact(this.dniContact).subscribe(data => {
      this.patient = data;
    });

    this._http.getContactPathologys(this.dniContact).subscribe(data => {
      this.pathologys = data;
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

  // Get the values for the forms and incluide in the table
  getContactValue(name: string, lastName: string, email: string, address: string): void {

  }

  // Change the page to edit contact
  changeEditPage( ){
    this.changeEditContactPage = true;
  }
}
