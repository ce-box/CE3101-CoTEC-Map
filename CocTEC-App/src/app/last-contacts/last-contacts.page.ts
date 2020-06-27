import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditComponent } from '../components/edit/edit.component';

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
      Pathology: 'asthmatic, hypertensive',
      email: 'bertacaro1996@gmail.com'
    },
    {
      Name: 'Alberto',
      LastName: 'Brenes Brenes',
      Id: '304980285',
      Age: '23',
      Nationality: 'costarricense',
      Direction: 'Cartago',
      Pathology: 'asthmatic, hypertensive',
      email: 'bertacaro1996@gmail.com'
    }, {
      Name: 'Ivannia',
      LastName: 'Brenes Fernandez',
      Id: '303020181',
      Age: '23',
      Nationality: 'costarricense',
      Direction: 'Cartago',
      Pathology: 'asthmatic, hypertensive',
      email: 'bertacaro1996@gmail.com'
    }
  ];
  keysLast = [
    'Name',
    'LastName',
    'Id', 'Age',
    'Nationality',
    'Direction',
    'Pathology',
    'email'
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
        keysParent: this.keysLast
      }
    });
    return await modal.present();
  }
}
