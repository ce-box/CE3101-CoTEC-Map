import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent implements OnInit {
  /**
   * boolean for set the general measure view
   */
  // tslint:disable-next-line: no-inferrable-types
  generalView: boolean = false;
  /**
   * name for the page
   */
  idPage: string;
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
   * Columns measure for country
   */
  columnsS = [{ prop: 'name', name: 'Name' },
  {  name: 'Country'},
  { prop: 'startDate', name: 'Start Date' },
  { prop: 'endDate', name: 'End Date'}];
  /**
   * Rows measure country
   */
  rowsS = [
    {
      name: 'Total LockDown',
      country: 'Costa Rica',
      startDate: '14/03/2020',
      endDate: '14/07/2020'
    },
  ];
  /**
   * Columns measure for general
   */
  columnsG = [{ prop: 'name', name: 'Name' },
  { prop: 'description', name: 'Description'}];
  /**
   * Rows measure general
   */
  rowsG = [
    {
      name: 'Traffic restrictions',
      description: 'No car between 5am to 5pm'
    },
  ];
  /**
   * Boolean variable for enable a change in the option
   */
  // tslint:disable-next-line: no-inferrable-types
  enableChange: boolean = false;
  /**
   * First method of the page
   * @param route Controller for the routing
   * @param dialog Controller for the dialog view
   */
  constructor( private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.idPage = this.route.snapshot.params.id;
    console.log('id', this.idPage);
    if (this.idPage === 'general'){
      this.generalView = true;
    }else{
      this.generalView = false;
    }
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
    console.log('selected to delete', this.selectToOption);
  }
  /**
   * Disable the option selected
   */
  disableSelected(){
    console.log('selected to disable', this.selectToOption);
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    if (this.idPage === 'general'){
      const dialogRef = this.dialog.open(ModifyDataComponent, {
        data: {
          Action: actionT,
          Parent: this.idPage,
          Keys: Object.keys(this.rowsG)
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }else{
      const dialogRef = this.dialog.open(ModifyDataComponent, {
        data: {
          Action: actionT,
          Parent: this.idPage,
          Keys: Object.keys(this.rowsS)
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  /**
   * Open a Modify/Add Component
   */
  openDialogToEdit() {
    const dialogRef = this.dialog.open(EditDataComponent, {
      data: {
        Parent: this.idPage,
        Selection: this.selectToOption,
        Keys: Object.keys(this.selectToOption['value'])
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
