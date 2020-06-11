import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { MedicationsComponent } from './pages/medications/medications.component';
import { PatologiesComponent } from './pages/patologies/patologies.component';


const routes: Routes = [
  {
    path : '', component : AdminComponent
  },
  {
    path : 'regions', component : RegionsComponent
  },
  {
    path : 'Chospital', component : HospitalsComponent
  },
  {
    path : 'medication', component : MedicationsComponent
  },
  {
    path : 'pathology', component : PatologiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
