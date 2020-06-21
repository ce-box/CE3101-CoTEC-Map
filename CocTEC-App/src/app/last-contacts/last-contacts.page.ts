import { Component, OnInit } from '@angular/core';
import { statusEnum } from '../modules/status.enum';

@Component({
  selector: 'app-last-contacts',
  templateUrl: './last-contacts.page.html',
  styleUrls: ['./last-contacts.page.scss'],
})
export class LastContactsPage implements OnInit {
  listPatients1 = [
    {
      Name: 'Bertha',
      LastName: 'Brenes Brenes',
      Id: '304980542',
      Age: '23',
      Nationality: 'costarricense',
      Direction: 'Cartago',
      Pathology: ['asthmatic', 'hypertensive'],
      email: 'bertacaro1996@gmail.com'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
