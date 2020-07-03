import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { MatDialog } from '@angular/material/dialog';
import { MeasuresService } from '../../services/measure/measures.service';
import { RegionsService } from '../../services/regions/regions.service';

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
  { prop: 'description', name: 'Description' },
  { prop: 'startDate', name: 'Start Date' },
  { prop: 'endDate', name: 'End Date'},
  { prop: 'status', name: 'Status' },
];
  /**
   * Rows measure country
   */
  rowsS = [
    {
      name: 'Uso Obligatorio de Mascarilla',
      description: 'Ahora todos usando mascarilla perros',
      startDate: '2020-04-02T00:00:00',
      endDate: '2020-12-31T00:00:00',
      status: 'Active'
    },
  ];
  /**
   * Columns measure for general
   */
  columnsG = [
    { prop: 'id', name: 'Id'},
    { prop: 'name', name: 'Name' },
    { prop: 'description', name: 'Description'}];
  /**
   * Rows measure general
   */
  rowsG = [
    {
      id: 1,
      name: 'Traffic restrictions',
      description: 'No car between 5am to 5pm'
    },
  ];
  /**
   * Variable for the countries
   */
  countries: any[] = [];
  /**
   * country selected in the options
   */
  countrySelected: string;
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
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public measureService: MeasuresService,
    public regionService: RegionsService) { }

  ngOnInit(): void {
    this.idPage = this.route.snapshot.params.id;
    console.log('id', this.idPage);
    if (this.idPage === 'general'){
      this.generalView = true;
      this.getGeneralMeasue();
    }else{
      this.generalView = false;
      this.getCountries();
    }
  }
  getGeneralMeasue(){
    this.measureService.getSanitaryMeasure().subscribe(
      dataR => {
        console.log('general measure', dataR);
        this.rowsG = dataR;
      }
    );
  }
  getCountries(){
    this.regionService.getCountries().subscribe(data => {
      console.log('region', data);
      this.countries = data;
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
   * Once is selected the country extract the measure by country
   * @param event event click
   */
  selectCountry(event){
    console.log('event', event);
    console.log('country Selected', this.countrySelected);
    if (this.countrySelected){
      this.measureService.getSanitaryMeasureByCountry(this.countrySelected).subscribe(
        data => {
          console.log('data service', data);
          this.rowsS = data;
        }
      );
    }
  }
  /**
   * Delete the option selected
   */
  deleteSelected(){
    console.log('selected to delete', this.selectToOption);
    // tslint:disable-next-line: no-string-literal
    this.measureService.disableMeause(this.selectToOption['value']['id']);
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
