import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RegionsComponent } from './pages/regions/regions.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { MedicationsComponent } from './pages/medications/medications.component';
import { PatologiesComponent } from './pages/patologies/patologies.component';
@NgModule({
  declarations: [AdminComponent, RegionsComponent, HospitalsComponent, MedicationsComponent, PatologiesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AdminModule { }
