import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyDataComponent } from './modify-data/modify-data.component';
import { PopoverComponent } from './popover/popover.component';
import { MatInputModule } from '@angular/material/input';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { EditDataComponent } from './edit-data/edit-data.component';

@NgModule({
  declarations: [ModifyDataComponent, PopoverComponent, EditDataComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormlyModule,
    FormlyBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxDatatableModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [ModifyDataComponent, PopoverComponent]
})
export class ComponentsModule { }
