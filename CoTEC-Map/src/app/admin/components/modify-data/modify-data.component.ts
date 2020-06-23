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
  /**
   * options for the selection
   */
  keyOptions: any[] =  [ 'pizza', 'Tacos'];
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

  /**
   * Temporal data for recruitment
   */
  recruitmentFields: FormlyFieldConfig[] = [
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
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'bedCapacity',
          templateOptions: {
            label: 'Bed Capacity',
            required: true
          },
          expressionProperties: {
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'bedQuantity',
          templateOptions: {
            label: 'Beds Quantity UCI',
            required: true
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'director',
          templateOptions: {
            label: 'Hospital Center\'s director',
            required: true
          },
        },
      ],
    },
    {
      type: 'textarea',
      key: 'contact',
      templateOptions: {
        label: 'Contact',
        required: true,
      },
    }
  ];
   /**
   * Temporal data for recruitment
   */
  regionFields: FormlyFieldConfig[] = [
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
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              console.log('name', this.data['values']);
            
            },
          }
        }
      ],
    }
  ];
  constructor( public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('data pased', this.data);
    this.keyOptions = this.data.Keys;
    if (this.data.Parent === 'Region'){
      this.recruitmentFields = this.regionFields;
      if(this.data.Action === 'add'){
        this.dataEditValue = ' '
      }
    }
  }
  submit(){
    console.log(this.model);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

