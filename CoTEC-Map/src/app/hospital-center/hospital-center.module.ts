import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { HospitalCenterRoutingModule } from './hospital-center-routing.module';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LatestPatientsComponent } from './pages/latest-patients/latest-patients.component';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import { PatientsComponent } from './pages/hospital-register/patients/patients.component';
import { ContactsComponent } from './pages/hospital-register/contacts/contacts.component';
import { EditPatientComponent } from './pages/hospital-register/edit-patient/edit-patient.component';
import { EditContactComponent } from './pages/hospital-register/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    PatientManagementComponent,
    ReportsComponent,
    LatestPatientsComponent,
    HomeCenterComponent,
    PatientsComponent,
    ContactsComponent,
    EditContactComponent,
    EditPatientComponent
  ],
  imports: [CommonModule, HospitalCenterRoutingModule, FormsModule, NgSelectModule],
})
export class HospitalCenterModule {}
