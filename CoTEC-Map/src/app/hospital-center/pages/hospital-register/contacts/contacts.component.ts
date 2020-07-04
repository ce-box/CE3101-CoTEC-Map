import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../Interfaces/contact';
import { Pathologys } from 'src/app/hospital-center/Interfaces/pathologys';
import { ContactService } from 'src/app/hospital-center/Services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  // Dni contact for search patient
  @Input() dniContact: number;

  pageName = 'Crear Contacto';
  countrySelect = false;

  // Data list
  pathologys: Pathologys[];
  pathologysList: any[] = [];
  contactList: any[] = [];
  countries: any;
  regions: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: ContactService) {}

  ngOnInit(): void {
    this._http.getPathologys().subscribe(data => {
      this.pathologys = data;
    });

    this._http.getContriesData().subscribe(data => {
      this.countries = data;
    });
  }

  getRegions(code: string) {
    this.countrySelect = true;
    for (const entry of this.countries) {
      if (entry.countryName === code){
        this._http.getRegionsForContry(entry.countryCode).subscribe(data => {
          this.regions = data;
        });
      }
    }
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
  // tslint:disable-next-line: max-line-length
  getContactValue(name: string, lastName: string, doB: string, email: string, address: string, dni: number, country: string, region: string): void {
    for (const entry of this.countries) {
      if (entry.countryName === country) {
        country = entry.countryCode;
      }
    }
    const contact: Contact = {name, lastName, doB, email, address, dni, country, region};
    const i = this.contactList.indexOf(contact);

    if (i === -1) {
      this.contactList.push(contact);
    }
  }

  // Delete a contact for the list
  deleteContact(value: Contact): void {
    const i = this.contactList.indexOf(value);

    if (i !== -1) {
      this.contactList.splice(i, 1);
    }
  }

  // Send a contact for the Data Base
  sendContact( ): void {
    if ((this.contactList.length)  !==  0 ) {
      console.log(this.contactList);
      if (this.contactList.length !== 0){
        this._http.postContacts(this.contactList, this.dniContact);
      }
    }
  }

}
