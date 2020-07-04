import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    public toastController: ToastController) {
  }
  @Input() id: string;
  @Input() data: any;
  @Input() keysParent: any;
  edit = false;
  users = [];
  userSelected: any;
  userData: object;
  keys: any[] = [];
  values: any;
  newData: object = {};

  ngOnInit() {
    console.log('id', this.id);
    console.log('keysParent', this.keysParent);
    if (this.id === 'edit') {
      this.edit = true;
    } else {
      this.keys = this.keysParent;
    }
    console.log('data', this.data);
    this.users = this.data;
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  userSelection(event) {
    console.log('user', this.userSelected);
    this.userData = this.users.find(user => {
      return this.userSelected === user.Id;
    });
    console.log(this.userData);
    this.keys = Object.keys(this.userData);
    console.log(this.keys);
  }
  getValues(event, key) {
    this.newData[key] = event.srcElement.value;
  }
  sendValues(event) {
    console.log('new Data', this.newData);
    if (this.edit) {
      this.presentToast('Se edito los datos seleccionados', 'success');
    } else {
      this.presentToast('Se crearon los datos seleccionados', 'success');
    }
  }
  async presentToast(messageT: string, colorT: string) {
    const toast = await this.toastController.create({
      message: messageT,
      duration: 2000,
      color: colorT
    });
    toast.present();
  }
}
