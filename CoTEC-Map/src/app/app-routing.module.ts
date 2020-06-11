import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientViewComponent } from './Component/client-view/client-view.component';
// Esto de aquí
import {AdminComponent} from './admin/pages/admin/admin.component';



const routes: Routes = [
  {path: '', component: ClientViewComponent},
  // Yo solo quería ver como se miraba :v
  // {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
  {path: 'admin', component: AdminComponent}
  // Si borra esto borra lo de arriba tambien 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
