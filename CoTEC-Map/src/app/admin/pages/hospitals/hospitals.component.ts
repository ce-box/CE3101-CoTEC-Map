import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { HospitalService } from '../../services/hospital/hospital.service';
import { RegionsService } from '../../services/regions/regions.service';
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
  columnsS = [
    { prop: 'id', name: 'Id' },
    { prop: 'name', name: 'Name' },
    { prop: 'managerName', name: 'Manager Name' },
    { prop: 'phone', name: 'Hospital Contact' },
    {name: 'Capacity'},
    { prop: 'icU_Capacity', name: 'UCI Capacity'},
    { prop: 'region', name: 'Region'},
    { prop: 'country', name: 'Country'}];
  /**
   * Rows Hospital center
   */
  rowsS = [
    {
      id: 1,
      name: 'Hospital Nacional de Niños',
      managerName: 'Rodolfo Hernández',
      phone: '(+506)2523-3600',
      capacity: 1400,
      icU_Capacity: 100,
      region: 'San Jose',
      country: 'CRI'
    },
  ];
  /**
   * Boolean variable for enable a change in the option
   */
  enableChange: boolean = false;
  countries: any[];

  constructor(
    public dialog: MatDialog,
    private hospitalService: HospitalService,
    public regionService: RegionsService) { }

  ngOnInit(): void {
    this.getHospitalList();
    this.getCountries();

  }
  getHospitalList(){
    this.hospitalService.getHospitals().subscribe(
      dataR => {
        console.log('hospital', dataR);
        this.rowsS = dataR;
      }
    );
  }
  getCountries(){
    this.regionService.getCountries().subscribe(data => {
      console.log('region', data);
      const countryData = [];
      for (const pharmacy of data) {
          const newPharmacyCo = {
            value: pharmacy.code,
            label: pharmacy.name
          };
          countryData.push(newPharmacyCo);
        }
      this.countries = countryData;
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
   * Delete the option selected
   */
  deleteSelected(){
    console.log('selected to delete', this.selectToOption);
    this.hospitalService.deleteHospital(this.selectToOption['value']['id']);
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Action: actionT,
        Parent: 'Hospital',
        Keys: Object.keys(this.rowsS[0]),
        Countries: this.countries
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
