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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegionsComponent } from './pages/regions/regions.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { MedicationsComponent } from './pages/medications/medications.component';
import { PatologiesComponent } from './pages/patologies/patologies.component';
import { MatInputModule } from '@angular/material/input';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ComponentsModule } from './components/components.module';
import { MeasureComponent } from './pages/measure/measure.component';

@NgModule({
  declarations: [AdminComponent, RegionsComponent, HospitalsComponent, MedicationsComponent, PatologiesComponent, MeasureComponent],
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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormlyModule,
    FormlyBootstrapModule,
    MatButtonModule,
    MatSnackBarModule,
    ComponentsModule
  ]
})
export class AdminModule { }
