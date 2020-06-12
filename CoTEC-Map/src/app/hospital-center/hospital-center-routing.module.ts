import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import { ReportsComponent } from './pages/reports/reports.component';


const routes: Routes = [
  { path : '', component : HomeCenterComponent },
  { path : 'reports', component : ReportsComponent },
  { path : 'patients', component : HomeCenterComponent },
  { path : 'LastPatients', component : HomeCenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalCenterRoutingModule { }
