import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  /**
   * Type of the selection
   */
  SelectionType = SelectionType;
  /**
   * Table row selected
   */
  selected = [];
  /**
   * Item selected to change/delete
   */
  selectToOption: object;
  /**
   * Columns hospital center
   */
  columnsS = [{ prop: 'location', name: 'Location' },
  { prop: 'uciCapacity', name: 'UCI Capacity'},
  {name: 'Name'},
  {name: 'Capacity'},
  {name: 'Director'},
  {name: 'Contact'}];
  /**
   * Rows Hospital center
   */
  rowsS = [
    {
      capacity: 64,
      contact: 'macaya@msalud.com',
      director: 'Roman Macaya',
      location: 'oriental',
      name: 'San Juan de Dios',
      uciCapacity: 12
    },
  ];
  /**
   * Boolean variable for enable a change in the option
   */
  enableChange: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  /**
   * selection event
   */
  onSelect({ selected }, Parent: string) {
    console.log('holi on select', selected, 'parent', Parent);
    this.selectToOption = {
      parent: Parent,
      value: selected[0]
    };
    this.enableChange = true;
  }
  /**
   * Delete the option selected
   */
  deleteSelected(){
    console.log('selected to delete',this.selectToOption);
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Action: actionT,
        Parent: 'Hospital',
        Keys: Object.keys(this.rowsS[0])
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  /**
   * Open a Modify/Add Component
   */
  openDialogToEdit() {
    const dialogRef = this.dialog.open(EditDataComponent, {
      data: {
        Parent: 'Hospital Center',
        Selection: this.selectToOption,
        Keys: Object.keys(this.rowsS[0])
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
