import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { RegionsService } from '../../services/regions/regions.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  /**
   * Columns structure for the Countries
   */
  columnsR = [{ prop: 'name', name: 'Name' }, { prop: 'code', name: 'Code' }];
  /**
   * Rows data for the country
   */
  rowsR = [
    { name: 'Aruba', code: 'ABW' },
    { name: 'Afganistán', code: 'AFG' },
    { name: 'Mexico', code: 'MX' }
  ];
  /**
   * Columns structure for the region
   */
  columnsP = [{ prop: 'name', name: 'Name' }];
  /**
   * Rows data for the regions
   */
  rowsP = [
    { name: 'Cartago' },
    { name: 'San Jose' },
    { name: 'Cartago' }
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
  countrySelected: string;

  constructor(public dialog: MatDialog, public regionService: RegionsService) { }

  ngOnInit(): void {
    console.log('ngOnit')
    this.getCountries();
  }
  getCountries(){
    this.regionService.getCountries().subscribe(data => {
      console.log('region', data);
      this.rowsR = data;
    });
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
   * Function to get the regions
   * @param event event
   */
  selectCountry(event){
    console.log('event', event);
    console.log('country Selected', this.countrySelected);
    if (this.countrySelected){
      this.regionService.getRegions(this.countrySelected).subscribe(
        data => {
          console.log('data service', data);
          this.rowsP = data;
        }
      );
    }
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
