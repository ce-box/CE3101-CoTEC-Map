import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastContactsPageRoutingModule } from './last-contacts-routing.module';

import { LastContactsPage } from './last-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastContactsPageRoutingModule
  ],
  declarations: [LastContactsPage]
})
export class LastContactsPageModule {}
