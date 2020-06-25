import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  columnsS = [{ prop: 'state', name: 'State' }];
  rowsS = [
    { state: 'oriental' },
    { state: 'occidental' },
    { state: 'oriental' }
  ];
  columnsR = [{ prop: 'region', name: 'Region' }, { name: 'Country' }];
  rowsR = [
    { region: 'central', country: 'Costa Rica' },
    { region: 'South', country: 'Argentine' },
    { region: 'North', country: 'Mexico' }
  ];
  columnsP = [{ prop: 'providence', name: 'Providence' }];
  rowsP = [
    { providence: 'Cartago' },
    { providence: 'San Jose' },
    { providence: 'Cartago' }
  ];
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
   * Boolean variable for enable a change in the option
   */
  enableChange: boolean = false;
  /**
   * Filter for the search bar
   */
  searchTextFilter: string;

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
    console.log(this.selectToOption);
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Action: actionT,
        Parent: 'Region',
        Keys: ['Region', 'Providence', 'State']
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
        Parent: 'Region',
        Selection: this.selectToOption,
        Keys: Object.keys(this.selectToOption['value'])
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
