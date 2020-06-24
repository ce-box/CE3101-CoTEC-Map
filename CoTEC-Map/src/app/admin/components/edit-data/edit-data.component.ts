import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  /**
   * Selected value in the chosen key
   */
  selectedValue: string;
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
   * Temporal data for form
   */
  recruitmentFields: FormlyFieldConfig[] = [];
  FieldOne: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key:'state',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.state.setValue(this.data['Selection']['value'][this.data.Keys[0]]);
            }
        }
      }
      ]
    }
  ];
  FieldTwo: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key:'state',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.state.setValue(this.data['Selection']['value'][this.data.Keys[0]]);
            }
        }
      },
      {
        className: 'col-6',
        type: 'input',
        key:'province',
        templateOptions: {
          required: true
        },
        hooks: {
          onInit: (field: FormlyFieldConfig) => {
            field.templateOptions.label = this.data.Keys[1];
            field.form.controls.province.setValue(this.data['Selection']['value'][this.data.Keys[1]]);
          }
      }
    }
      ]
    }
  ];
  /**
   * First method in the page
   * @param dialogRef Controller for the dialog
   * @param data Data passed from the parent component
   */
  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('edit', this.data);
    if (this.data.Keys.length === 1){
      this.recruitmentFields = this.FieldOne;
    }
    if (this.data.Keys.length === 2){
      this.recruitmentFields = this.FieldTwo;
    }

  }
  submit(){
    console.log('submit', this.model);
  }

}
