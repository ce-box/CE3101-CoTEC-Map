import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { LatestPatientsComponent } from './pages/latest-patients/latest-patients.component';
import { PatientsComponent } from './pages/hospital-register/patients/patients.component';
import { ContactsComponent } from './pages/hospital-register/contacts/contacts.component';
import { MatSliderModule } from '@angular/material/slider';




const routes: Routes = [
  { path : '', component : HomeCenterComponent },
  { path : 'reports', component : ReportsComponent },
  { path : 'patients', component : PatientManagementComponent },
  { path : 'LastPatients', component : LatestPatientsComponent },
  { path : 'patient', component: PatientsComponent},
  { path : 'contact', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule],
  exports: [RouterModule]
})
export class HospitalCenterRoutingModule { }
