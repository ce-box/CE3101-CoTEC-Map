import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SelectionType } from '@swimlane/ngx-datatable';
import faker from 'faker';
import { ubicaciones } from 'src/assets/data/ubication';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NationalityService } from '../../services/nationality/nationality.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopoverComponent } from '../../components/popover/popover.component';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { StatusService } from '../../services/status/status.service';
/**
 * Declare fuse variable
 */
declare const Fuse: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  /**
   * Will be am observable for the searchInput bar
   */
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  /**
   * Columns of the table
   */
  columns: any[] = [{ name: 'Id' , prop: 'id' }, { name: 'Name' , prop: 'name' }];
  /**
   * rows of the table
   */
  rows = [
    {
      id: 1,
      name: 'ACTIVE'
    }
  ];

  /**
   * Selected Value
   */
  selectedValue: any;
  /**
   * Option Select
   */
  foods = [
    { value: 'byCountry', viewValue: 'Por Pais' },
    { value: 'general', viewValue: 'General' }
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
  /**
   * Fuse options
   */
  fuseOptions: any;
  /**
   * Fuse variable
   */
  fuse: any;
  /**
   * list of provinces
   */
  provinces = ubicaciones.provincias;
  /**
   * Results for the fuse
   */
  fuseResults: any[];
  /**
   * States of the patients
   */
  states = [
    { id: 'active', displayName: 'Active' },
    { id: 'infected', displayName: 'Infected' },
    { id: 'recovered', displayName: 'Recovered' },
    { id: 'dead', displayName: 'Dead' }
  ];
  stateForm = new FormControl();
  /**
   * Limit of the table
   */
  tableLimit: number;
  /**
   * File selected
   */
  FileSelected: File;
  /**
   * Boolean for the enable of edition
   */
  // tslint:disable-next-line: no-inferrable-types
  enableEdit: boolean = false;
  /**
   * Boolean for the disable of more files in the app
   */
  // tslint:disable-next-line: no-inferrable-types
  disableMoreFile: boolean = true;
  /**
   * String of the option in the table
   */
  selectToOption: object;
  /**
   * First method in the page
   * @param adminService Controller for the admin service
   * @param iconRegistry Controller for the icon Register
   * @param sanitizer Controller to get trusted url
   */
  constructor(
    public adminService: AdminServiceService,
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    private nationalityService: NationalityService,
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    private route: Router,
    public dialog: MatDialog,
    public statusService: StatusService) {
    iconRegistry.addSvgIcon(
      'excel_icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/imgs/excel_icon.png'));
  }

  ngOnInit(): void {
    this.provinces = ubicaciones.provincias;
    this.fuseResults = this.rows;
    this.getStatus();
  }
  async getStatus(){
    this.statusService.getStatus().then(
      dataR => {
        this.rows = dataR;
        this.fuseResults = this.rows;
        this.setRows();
      }
    );
  }
  setRows(){
    this.fuseOptions = {
      isCaseSensitive: false,
      findAllMatches: false,
      includeMatches: false,
      includeScore: false,
      useExtendedSearch: false,
      minMatchCharLength: 1,
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,

    };
    this.fuse = new Fuse(this.fuseResults, this.fuseOptions);
  }
  /**
   * A life cycle hook that is called after the view is init.
   */
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((text) => {
          this.applyColumnFilters();

        })
      )
      .subscribe();
  }
  /**
   * Get nationalities
   */
  async getNationalities() {
    // tslint:disable-next-line: prefer-const
    let dataN;
    await this.nationalityService.getCountries();
    console.log('outside', dataN);
  }
  /**
   * Test services get data
   */
  getServiceData() {
    this.adminService.getServiceData().subscribe(data => {
      console.log(data);
    });
  }
  deleteData(){
    console.log('delete');
    // tslint:disable-next-line: no-string-literal
    this.statusService.deleteStatus(this.selectToOption['value']['id']);
    location.reload();
  }

  /**
   * Sort the column by position
   * @param columnList List of columns
   */
  sortColumnListByPosition(columnList: any[]) {
    columnList.sort((columnA, columnB) => columnA.position < columnB.position ? -1 : columnA.position > columnB.position ? 1 : 0);
  }
  /**
   * selection event
   */
  onSelect({ selected }) {
    console.log('holi on select', selected);
    this.selectToOption = {
      parent: 'Status',
      value: selected[0]
    };
    this.enableEdit = true;
  }
  /**
   * Apply filters to the columns
   */
  applyColumnFilters() {
    if (!this.searchTextFilter?.length) {
      this.fuseResults = this.rows;
    }
    if (this.searchTextFilter?.length) {
      this.fuse = new Fuse(this.fuseResults, this.fuseOptions);
      this.fuseResults = this.fuse.search(this.searchTextFilter).map((i) => i.item);
    }
  }
  /**
   * Selected item
   */
  onCheckboxChangeFn(event) {
    console.log('event', event);
  }
  /**
   * Select option for the prevent measure
   */
  updateValueSelectPrevent(event) {
    console.log('update', event);
    console.log('selected', this.selectedValue);
    const url = `/admin/measure/${this.selectedValue}`;
    this.route.navigateByUrl(url);
  }
  updateValueSelectStatus(event) {
    console.log('update', event);
    console.log('selected', this.stateForm.value);
  }
  /**
   * Upload the files
   * @param element the element uploaded
   */
  fileChange(element) {
    console.log(element.target.files[0]);
    if (element.target.files[0].type === 'application/vnd.ms-excel'){
      console.log('es un excel');
      this.openSnackBar('Send the file');
      this.FileSelected = element.target.files[0];
      this.disableMoreFile = false;
    }else{
      this.openSnackBar('Please upload an excel File');
    }
  }
  /**
   * Send the file to the service
   */
  upload() {
    console.log('will be sent', this.selectedValue);
    //this.adminService.uploadData(this.FileSelected);
  }
  /**
   * Toast messages controller
   * @param message message for the toast
   */
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog() {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Parent: 'Status',
        Keys: Object.keys(this.rows[0])
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
        Parent: 'Status',
        Selection: this.selectToOption,
        Keys: Object.keys(this.rows[0])
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
