import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  columnsS = [ { prop: 'state' , name: 'State' }];
  rowsS = [
    {state: 'oriental'},
    {state: 'occidental'},
    {state: 'oriental'}
  ];
  columnsR = [ { prop: 'region' , name: 'Region' }];
  rowsR = [
    { region: 'central'},
    {region: 'central'},
    {region: 'central'}
  ];
  columnsP = [ { prop: 'providence' , name: 'Providence' }];
  rowsP = [
    { providence: 'Cartago'},
    {providence: 'San Jose'},
    {providence: 'Cartago'}
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
   * Filter for the search bar
   */
  searchTextFilter: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  /**
   * selection event
   */
  onSelect({ selected }) {
    console.log('holi on select', selected);
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Action: actionT,
        Parent: 'Region',
        Keys: ['Region', 'Providence', 'State'],
        values: []
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
