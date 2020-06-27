import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastContactsPage } from './last-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: LastContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastContactsPageRoutingModule {}
