import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientViewComponent } from './Component/client-view/client-view.component';
import { CommonModule } from '@angular/common';




const routes: Routes = [
  {path: '', component: ClientViewComponent},
  // Yo solo quería ver como se miraba :v
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'hospitalCenter', loadChildren: () => import('./hospital-center/hospital-center.module').then(m => m.HospitalCenterModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
