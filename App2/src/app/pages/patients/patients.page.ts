import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataBaseService } from 'src/app/service/data-base.service';
import { EditComponent } from 'src/app/components/edit/edit.component';
import { statusEnum } from 'src/app/module/statusEnum';

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
      Id: 304980542,
      Age: 23,
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
      Id: 304980541,
      Age: 23,
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
      Id: 304780542,
      Age: 23,
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
  patientsDb: any;
  patientDb: any;
  constructor( public modalController: ModalController, private db: DataBaseService) { }

  ngOnInit() {
    console.log('ngOnit');
    this.db.getDatabaseState().subscribe(rdy => {
      console.log(rdy);
      if (rdy) {
        console.log('ready', rdy);
        this.db.getContacts().subscribe(devs => {
          this.patientsDb = devs;
          console.log('inside ready', devs);
        });
      }
      console.log(this.db.getPatients());
    });
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
