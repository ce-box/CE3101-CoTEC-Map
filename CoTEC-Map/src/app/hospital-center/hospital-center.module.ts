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
import { EditPatientComponent } from './pages/latest-patients/edit-patient/edit-patient.component';
import { ContactManagementComponent } from './pages/latest-patients/contact-management/contact-management.component';


@NgModule({
  declarations: [
    PatientManagementComponent,
    ReportsComponent,
    LatestPatientsComponent,
    HomeCenterComponent,
    PatientsComponent,
    ContactsComponent,
    EditPatientComponent,
    ContactManagementComponent,
  ],
  imports: [CommonModule, HospitalCenterRoutingModule, FormsModule, NgSelectModule],
})
export class HospitalCenterModule {}
