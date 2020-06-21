import { Component, OnInit } from '@angular/core';
import { statusEnum } from '../modules/status.enum';
import { ModalController } from '@ionic/angular';
import { EditComponent } from '../components/edit/edit.component';

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
      Medication: 'Ibuprofen',
      Hospitalize: true,
      UCI: true
    },
    {
      Name: 'Alberto',
      LastName: 'Brenes Brenes',
      Id: '304980541',
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
      Name: 'Esmaik',
      LastName: 'Brenes Brenes',
      Id: '304780542',
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
  keyPatients = [
    'Name',
    'LastName',
    'Id',
    'Age',
    'Nationality',
    'Region',
    'Pathology',
    'Status',
    'Medication',
    'Hospitalize',
    'UCI'
  ];
  constructor( public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal(idM: string) {
    const modal = await this.modalController.create({
      component: EditComponent,
      cssClass: 'EditComponent',
      componentProps: {
        id: idM,
        data: this.listPatients1,
        keysParent: this.keyPatients
      }
    });
    return await modal.present();
  }

}
