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
  /**
   * Formly data structure for one value
   */
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
  /**
   * Formly data structure for two values
   */
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
   * Formly data structure for four values
   */
  FieldFour: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'state',
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
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'option3',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[2];
              field.form.controls.option3.setValue(this.data['Selection']['value'][this.data.Keys[2]]);
            }
        }
      },
      {
        className: 'col-6',
        type: 'input',
        key:'option4',
        templateOptions: {
          required: true
        },
        hooks: {
          onInit: (field: FormlyFieldConfig) => {
            field.templateOptions.label = this.data.Keys[3];
            field.form.controls.option4.setValue(this.data['Selection']['value'][this.data.Keys[3]]);
          }
      }
    }
      ]
    }
  ];
  /**
   * Formly data structure for six values
   */
  SixFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'option1',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.option1.setValue(this.data['Selection']['value'][this.data.Keys[0]]);
            }
        }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option2',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[1];
              field.form.controls.option2.setValue(this.data['Selection']['value'][this.data.Keys[1]]);
            }
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
          key: 'option3',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[2];
              field.form.controls.option3.setValue(this.data['Selection']['value'][this.data.Keys[2]]);
            }
        }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option4',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[3];
              field.form.controls.option4.setValue(this.data['Selection']['value'][this.data.Keys[3]]);
            }
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
          key: 'option5',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[4];
              field.form.controls.option5.setValue(this.data['Selection']['value'][this.data.Keys[4]]);
            }
        }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option6',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[5];
              field.form.controls.option6.setValue(this.data['Selection']['value'][this.data.Keys[5]]);
            }
        }
        }
      ],
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
    console.log('edit leght keys',this.data.Keys.length )
    if (this.data.Keys.length === 1){
      this.recruitmentFields = this.FieldOne;
    }
    if (this.data.Keys.length === 2){
      this.recruitmentFields = this.FieldTwo;
    }
    if (this.data.Keys.length === 3 && this.data.Parent === 'Medication'){
      console.log('edit medication');
    }
    if (this.data.Keys.length === 4){
      this.recruitmentFields = this.FieldFour;
    }
    if (this.data.Keys.length === 6){
      this.recruitmentFields = this.SixFields;
    }

  }
  submit(){
    console.log('submit', this.model);
  }

}
