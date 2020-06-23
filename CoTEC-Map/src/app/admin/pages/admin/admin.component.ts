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
   * rows of the table
   */
  rows = [
    { number: 1, name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { number: 2, name: 'Dany', gender: 'Male', company: 'KFC' },
    { number: 3, name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  /**
   * Columns of the table
   */
  columns: any[] = [{ name: 'number' }, { prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
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
   * Boolean for the disable of more files in the app
   */
  disableMoreFile: boolean = true;
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
    private _snackBar: MatSnackBar) {
    iconRegistry.addSvgIcon(
      'excel_icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/imgs/excel_icon.png'));
  }

  ngOnInit(): void {
    this.provinces = ubicaciones.provincias;
    this.rows = this.getFakeRows(6);
    this.fuseResults = this.rows;
    this.columns = [
      { name: 'Name', prop: 'personal.name' },
      { name: 'Last Name', prop: 'personal.lastName' },
      { name: 'Id', prop: 'id' }
    ];
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
      keys: [
        'personal.name',
        'personal.lastName'
      ]
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
  }
  /**
   * get several ros
   * @param qty number of the row
   */
  getFakeRows(qty: number) {
    const fakeRows = [];
    for (let i = 0; i < qty; i++) {
      const newFakeObject = this.getFakeRow();
      fakeRows.push(newFakeObject);
    }
    return fakeRows;
  }
  /**
   * Get a fake data for the row
   */
  getFakeRow() {
    /* Ask for more possible options like:
    * 'Rather not say'
    */
    const genders = ['male', 'female'];
    console.log(this.provinces[Math.floor(Math.random() * (this.provinces.length))]);
    return {
      id: faker.random.uuid(),
      personal: {
        name: faker.name.findName() + ' ' + faker.name.lastName(),
        lastName: faker.name.lastName(),
        birthdate: faker.date.past().toLocaleString(),
        sex: genders[Math.floor(Math.random() * (genders.length))]
      },
      contact: {
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber()
      },
      address: {
        region: this.provinces[Math.floor(Math.random() * (this.provinces.length))]
      },
      state: this.states[Math.floor(Math.random() * (this.states.length))],
    };
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
  updateValueSelectPrevent(event) {
    console.log('update', event);
    console.log('selected', this.selectedValue);
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
    if (element.target.files[0].type === "application/vnd.ms-excel"){
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
}
