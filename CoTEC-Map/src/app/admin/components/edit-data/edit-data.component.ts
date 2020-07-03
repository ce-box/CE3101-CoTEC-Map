import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MedicationService } from '../../services/medication/medication.service';
import { PathologiesService } from '../../services/pathology/pathologies.service';
import { MeasuresService } from '../../services/measure/measures.service';
import { HospitalService } from '../../services/hospital/hospital.service';

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
          key: 'state',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.state.setValue(this.data.Selection['value'][this.data.Keys[0]]);
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
          key: 'state',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.state.setValue(this.data.Selection['value'][this.data.Keys[0]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'province',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[1];
              field.form.controls.province.setValue(this.data.Selection['value'][this.data.Keys[1]]);
            }
          }
        }
      ]
    }
  ];
  /**
   * Formly data structure for medication
   */
  FieldMedication: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'id',
          templateOptions: {
            required: true,
            readonly: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.id.setValue(this.data.Selection['value'][this.data.Keys[0]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'medicationName',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[1];
              field.form.controls.medicationName.setValue(this.data.Selection['value'][this.data.Keys[1]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'select',
          key: 'pharmaCo',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[2];
              field.form.controls.pharmaCo.setValue(this.data.Selection['value'][this.data.Keys[2]]);
              field.templateOptions.options = this.data.Pharmacies;
            }
          }
        }
      ]
    }
  ];
  /**
   * Formly data structure for medication
   */
  FieldGeneral: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'id',
          templateOptions: {
            required: true,
            readonly: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.id.setValue(this.data.Selection['value'][this.data.Keys[0]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[1];
              field.form.controls.name.setValue(this.data.Selection['value'][this.data.Keys[1]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'description',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[2];
              field.form.controls.description.setValue(this.data?.Selection.value[this.data.Keys[2]]);
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
          key: 'option1',
          templateOptions: {
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.option1.setValue(this.data.Selection['value'][this.data.Keys[0]]);
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
              field.form.controls.option2.setValue(this.data.Selection['value'][this.data.Keys[1]]);
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
              field.form.controls.option3.setValue(this.data.Selection['value'][this.data.Keys[2]]);
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
              field.form.controls.option4.setValue(this.data.Selection['value'][this.data.Keys[3]]);
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
              field.form.controls.option1.setValue(this.data.Selection['value'][this.data.Keys[0]]);
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
              field.form.controls.option2.setValue(this.data.Selection['value'][this.data.Keys[1]]);
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
              field.form.controls.option3.setValue(this.data.Selection['value'][this.data.Keys[2]]);
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
              field.form.controls.option4.setValue(this.data.Selection['value'][this.data.Keys[3]]);
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
              field.form.controls.option5.setValue(this.data.Selection['value'][this.data.Keys[4]]);
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
              field.form.controls.option6.setValue(this.data.Selection['value'][this.data.Keys[5]]);
            }
          }
        }
      ],
    }
  ];
  /**
   * Formly data structure for six values
   */
  HeightFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'option1',
          templateOptions: {
            required: true,
            readonly: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[0];
              field.form.controls.option1.setValue(this.data.Selection?.value[this.data.Keys[0]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option2',
          templateOptions: {
            required: true,
            readonly: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[1];
              field.form.controls.option2.setValue(this.data.Selection?.value[this.data.Keys[1]]);
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
              field.form.controls.option3.setValue(this.data.Selection?.value[this.data.Keys[2]]);
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
              field.form.controls.option4.setValue(this.data.Selection?.value[this.data.Keys[3]]);
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
              field.form.controls.option5.setValue(this.data.Selection['value'][this.data.Keys[4]]);
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
              console.log('key',this.data.Keys[5], 'value', this.data.Selection?.value[this.data.Keys[5]] );
              field.form.controls.option6.setValue(this.data.Selection?.value[this.data.Keys[5]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option7',
          templateOptions: {
            required: true,
            readonly: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[6];
              console.log('key',this.data.Keys[6], 'value', this.data.Selection?.value[this.data.Keys[6]] );
              field.form.controls.option7.setValue(this.data.Selection['value'][this.data.Keys[6]]);
            }
          }
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'option8',
          templateOptions: {
            required: true,
            readonly: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.label = this.data.Keys[7];
              console.log('key',this.data.Keys[7], 'value', this.data.Selection?.value[this.data.Keys[7]] );
              field.form.controls.option8.setValue(this.data.Selection['value'][this.data.Keys[7]]);
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
              @Inject(MAT_DIALOG_DATA) public data: any,
              public medicationService: MedicationService,
              public patholgyService: PathologiesService,
              public measureService: MeasuresService,
              private hospitalService: HospitalService) { }

  ngOnInit(): void {
    console.log('edit', this.data);
    console.log('edit Length keys', this.data.Keys.length);
    if (this.data.Keys.length === 1) {
      this.recruitmentFields = this.FieldOne;
    }
    if (this.data.Keys.length === 2) {
      this.recruitmentFields = this.FieldTwo;
    }
    if (this.data.Keys.length === 3 && this.data.Parent === 'Medication') {
      console.log('edit medication');
      this.recruitmentFields = this.FieldMedication;
    }
    if (this.data.Keys.length === 3 && this.data.Parent === 'general') {
      console.log('edit general');
      this.recruitmentFields = this.FieldGeneral;
    }
    if (this.data.Keys.length === 4) {
      this.recruitmentFields = this.FieldFour;
    }
    if (this.data.Keys.length === 6) {
      this.recruitmentFields = this.SixFields;
    }
    if(this.data.Keys.length === 8){
      this.recruitmentFields = this.HeightFields;
    }

  }
  submit() {
    console.log('submit', this.model);
    if (this.data.Parent === 'Medication') {
      const medication = [
        {
          op: 'replace',
          path: '/name',
          value: this.model?.medicationName
        },
        {
          op: 'replace',
          path: '/pharmaceuticCo',
          value: this.model?.pharmaCo
        }
      ];
      console.log('id', this.model?.id, 'data', medication);
      this.medicationService.EditMedication(medication, this.model?.id).subscribe(
        data => {
          console.log('data', data);
          this.onNoClick();
        }
      );
    }
    if (this.data.Parent === 'Pathology') {
      const data = [
        {
          op: 'replace',
          path: '/description',
          value: this.model?.option2
        },
        {
          op: 'replace',
          path: 'treatment',
          value: this.model?.option4
        },
        {
          op: 'replace',
          path: '/symptoms',
          value: this.model?.option3
        }
      ];
      console.log('id', this.model[0], 'data', data);
      this.patholgyService.editPathology(this.model?.option1, data).subscribe(
        dataR => {
          console.log('edit', dataR);
          this.onNoClick();
        }
      );
    }
    if (this.data.Parent === 'general') {
      const dataEdit = [
        {
          op: 'replace',
          path: '/name',
          value: this.model?.name
        },
        {
          op: 'replace',
          path: '/description',
          value: this.model?.description
        }
      ];
      this.measureService.editMeasure(this.model?.id, dataEdit);
    }
    if (this.data.Parent === 'Hospital Center'){
      const data = [
        {
            "op":"replace",
            "path":"/managerName",
            "value":"Luis Perez"
        },
        {
            "op":"replace",
            "path":"/Phone",
            "value":"(+506)2214-5648"
        },
        {
            "op":"replace",
            "path":"/capacity",
            "value":2000
        },
        {
            "op":"replace",
            "path":"/iCU_Capacity",
            "value":100
        }
    ]
      this.hospitalService.editHospital(this.model.option1, data);
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
