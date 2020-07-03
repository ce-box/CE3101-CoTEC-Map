import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { MedicationService } from '../../services/medication/medication.service';
@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent implements OnInit {
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
    { prop: 'medicationName', name: 'Medication' },
    { prop: 'pharmaCo', name: 'Pharmacy House' }];
  /**
   * Rows Hospital center
   */
  rowsS = [
    {
      id: 1,
      medicationName: 'Cibacen',
      pharmaCo: 'Novartis'
    },
  ];
  /**
   * Boolean variable for enable a change in the option
   */
  enableChange: boolean = false;
  /**
   * List of the pharmacyHouses in the db
   */
  pharmacyHouse: any[];
  /**
   * First method for open a card
   * @param dialog Controller for the dialog
   */
  constructor(
    public dialog: MatDialog,
    public medicationService: MedicationService
  ) { }

  ngOnInit(): void {
    this.getMedications();
    this.getPharmacyHouse();
  }
  getMedications() {
    this.medicationService.getMedications().subscribe(
      data => {
        console.log('medicatin data', data);
        this.rowsS = data;
      }
    );
  }
  getPharmacyHouse() {
    this.medicationService.getPharmacyHouses().subscribe(
      data => {
        console.log('farmacy house');
        const dataPharmacy = [];
        for (const pharmacy of data) {
          const newPharmacyCo = {
            value: pharmacy.id,
            label: pharmacy.name
          };
          dataPharmacy.push(newPharmacyCo);
        }
        this.pharmacyHouse = dataPharmacy;

      }
    );
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
  deleteSelected() {
    console.log('selected to delete', this.selectToOption);
    this.medicationService.deleteMedication(this.selectToOption['value'].id);
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Action: actionT,
        Parent: 'Medication',
        Keys: Object.keys(this.rowsS[0]),
        Pharmacies: this.pharmacyHouse
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
        Parent: 'Medication',
        Selection: this.selectToOption,
        Keys: Object.keys(this.rowsS[0]),
        Pharmacies: this.pharmacyHouse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
