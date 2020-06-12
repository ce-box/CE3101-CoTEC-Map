import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalCenterRoutingModule } from './hospital-center-routing.module';
import { PatientManagementComponent } from './pages/patient-management/patient-management.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LatestPatientsComponent } from './pages/latest-patients/latest-patients.component';
import { HomeCenterComponent } from './pages/home-center/home-center.component';


@NgModule({
  declarations: [PatientManagementComponent, ReportsComponent, LatestPatientsComponent, HomeCenterComponent],
  imports: [
    CommonModule,
    HospitalCenterRoutingModule
  ]
})
export class HospitalCenterModule { }
