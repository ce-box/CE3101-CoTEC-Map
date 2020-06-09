import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule { }
