import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { EditDataComponent } from '../../components/edit-data/edit-data.component';
import { ModifyDataComponent } from '../../components/modify-data/modify-data.component';
import { PathologiesService } from '../../services/pathology/pathologies.service';
@Component({
  selector: 'app-patologies',
  templateUrl: './patologies.component.html',
  styleUrls: ['./patologies.component.scss']
})
export class PatologiesComponent implements OnInit {
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
  columnsS = [{ prop: 'name', name: 'Name' },
  { prop: 'description', name: 'Description' },
  { name: 'Symptoms' },
  { name: 'Treatment' }];
  /**
   * Rows Hospital center
   */
  rowsS = [
    {
      name: 'Flu',
      description: 'Can cause mild to severe illness, and at times can lead to death',
      symptoms: 'fever* or feeling feverish/chills, cough, sore throat, runny or stuffy nose, muscle or body aches, headaches, fatigue (tiredness)',
      treatment: 'you`ll need nothing more than bed rest and plenty of fluids'
    },
  ];
  /**
   * Boolean variable for enable a change in the option
   */
  enableChange: boolean = false;
  constructor(
    public dialog: MatDialog,
    public patholgyService: PathologiesService) { }

  ngOnInit(): void {
    this.getPathologies();
  }
  getPathologies() {
    this.patholgyService.getPathology().subscribe(
      data => {
        console.log('data service', data);
        this.rowsS = data;
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
    this.patholgyService.deletePathology(this.selectToOption['value']['name']).subscribe(
      dataR => {
        console.log('response delete', dataR);
      }
    );
    location.reload();
  }
  /**
   * Open a Modify/Add Component
   */
  openDialog(actionT: string) {
    const dialogRef = this.dialog.open(ModifyDataComponent, {
      data: {
        Action: actionT,
        Parent: 'Pathology',
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
        Parent: 'Pathology',
        Selection: this.selectToOption,
        Keys: Object.keys(this.rowsS[0])
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
