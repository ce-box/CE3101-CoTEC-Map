import { Component, OnInit } from '@angular/core';
import { statusEnum } from '../modules/status.enum';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {
  listPatients1 = [
    {
      Name: 'Bertha',
      LastName: 'Brenes Brenes',
      Id: '304980542',
      Age: '23',
      Nationality: 'costarricense',
      Region: 'Cartago',
      Pathology: ['asthmatic', 'hypertensive'],
      Status: statusEnum.ACTIVE,
      Medication: ['Ibuprofen'],
      Hospitalize: true,
      UCI: true
    },
    {
      Name: 'Bertha',
      LastName: 'Brenes Brenes',
      Id: '304980542',
      Age: '23',
      Nationality: 'costarricense',
      Region: 'Cartago',
      Pathology: ['asthmatic', 'hypertensive'],
      Status: statusEnum.ACTIVE,
      Medication: ['Ibuprofen'],
      Hospitalize: true,
      UCI: true
    },
    {
      Name: 'Bertha',
      LastName: 'Brenes Brenes',
      Id: '304980542',
      Age: '23',
      Nationality: 'costarricense',
      Region: 'Cartago',
      Pathology: ['asthmatic', 'hypertensive'],
      Status: statusEnum.ACTIVE,
      Medication: ['Ibuprofen'],
      Hospitalize: true,
      UCI: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
