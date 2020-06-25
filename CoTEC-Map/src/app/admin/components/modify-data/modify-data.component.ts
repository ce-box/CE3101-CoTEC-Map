import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  selectedItem: string;
  test: 'region';
  /**
   * options for the selection
   */
  keyOptions: any[] = [
    'steak-0-1', 'Pizza', 'tacos-2', 'Tacos'
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
  /**
   * Variable to edit data
   */
  dataEditValue: string;
  /**
   * Boolean Item
   */
  booleanItem: boolean = false;

  /**
   * Temporal data for form
   */
  recruitmentFields: FormlyFieldConfig[] = [];
  /**
   * Value for present the selection item
   */
  presentOptions: boolean = false;
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
  /**
   * Temporal data for region form
   */
  MedicationFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'option1',
          templateOptions: {
            label: 'Medication',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option2',
          templateOptions: {
            label: 'House Pharmacy',
            required: true
          }
        }
      ],
    }
  ];
  /**
   * Temporal data for region form
   */
  GeneralFields: FormlyFieldConfig[] = [
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
          key: 'description',
          templateOptions: {
            label: 'Description',
            required: true
          }
        }
      ],
    }
  ];
  /**
   * Temporal data for hospital form
   */
  HospitalFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'location',
          templateOptions: {
            label: 'Location',
            required: true
          }
        },
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
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'capacity',
          templateOptions: {
            label: 'Beds capacity',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'UCI',
          templateOptions: {
            label: 'UCI beds capacity',
            required: true
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'director',
          templateOptions: {
            label: 'Hospital`s Director',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'contact',
          templateOptions: {
            label: 'Director`s contact',
            required: true
          }
        }
      ],
    }
  ];
  /**
   * Temporal data for hospital form
   */
  PathologyFields: FormlyFieldConfig[] = [
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
          key: 'description',
          templateOptions: {
            label: 'Description',
            required: true
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'symptoms',
          templateOptions: {
            label: 'Symptoms',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'treatment',
          templateOptions: {
            label: 'Treatment',
            required: true
          }
        }
      ],
    }
  ];
  /**
   * Temporal data for hospital form
   */
  ByCountryFields: FormlyFieldConfig[] = [
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
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'startDate',
          templateOptions: {
            label: 'Start Date',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'endDate',
          templateOptions: {
            label: 'End Date',
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
    if (this.data.Parent === 'Region') {
      this.presentOptions = true;
    } else {
      this.presentOptions = false;
      if (this.data.Parent === 'Hospital') {
        this.recruitmentFields = this.HospitalFields;
      }
      if (this.data.Parent === 'Medication') {
        this.recruitmentFields = this.MedicationFields;
      }
      if (this.data.Parent === 'Pathology') {
        this.recruitmentFields = this.PathologyFields;
      }
      if (this.data.Parent === 'byCountry'){
        this.recruitmentFields = this.ByCountryFields;
      }
      if (this.data.Parent === 'general'){
        this.recruitmentFields = this.GeneralFields;
      }
    }
  }
  submit() {
    console.log(this.model);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  selectOptionF(event) {
    console.log('eve', event);
    console.log('selected value', this.selectedValue);
    if (this.selectedValue) {
      if (this.selectedValue === 'Region') {
        console.log('valuyes Region');
        this.recruitmentFields = this.RegionFields
      }
      if (this.selectedValue === 'Providence') {
        console.log('valuyes');
        this.recruitmentFields = this.SPrFields;
      }
      if (this.selectedValue === 'State') {
        console.log('valuyes');
        this.recruitmentFields = this.SPrFields;
      }
    }
  }
}

