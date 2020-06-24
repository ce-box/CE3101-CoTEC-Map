import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-data',
  templateUrl: './modify-data.component.html',
  styleUrls: ['./modify-data.component.scss']
})
export class ModifyDataComponent implements OnInit {
  /**
   * Selected value in the chosen key
   */
  selectedValue: string;
  selectedItem:string;
  test: 'region';
  /**
   * options for the selection
   */
  keyOptions: any[] = [
    'steak-0-1','Pizza','tacos-2', 'Tacos'
];
  /**
   * Form for the forms
   */
  form = new FormGroup({});
  /**
   * modal object
   */
  model: any = {};
  /**
   * option for the form
   */
  options: FormlyFormOptions = {};
  dataEditValue: string;
  booleanItem: boolean = false;

  /**
   * Temporal data for form
   */
  recruitmentFields: FormlyFieldConfig[] = []

  /**
   * Temporal data for one input
   */
  SPrFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            required: true
          }
        }
      ],
    }
  ];
  /**
   * Temporal data for region form
   */
  RegionFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'country',
          templateOptions: {
            label: 'Country',
            required: true
          }
        }
      ],
    }
  ];
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('data pased', this.data);
    this.keyOptions = this.data.Keys;
  }
  submit() {
    console.log(this.model);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  selectOptionF(event){
    console.log('eve', event);
    console.log('selected value', this.selectedValue);
    if (this.selectedValue){
      if (this.selectedValue === 'Region'){
        console.log('valuyes Region');
        this.recruitmentFields = this.RegionFields
      }
      if (this.selectedValue === 'Providence'){
        console.log('valuyes');
        this.recruitmentFields = this.SPrFields;
      }
      if (this.selectedValue === 'State'){
        console.log('valuyes');
        this.recruitmentFields = this.SPrFields;
      }
    }
  }
}

