import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RegionsService } from '../../services/regions/regions.service';
import { tap } from 'rxjs/operators';
import { MedicationService } from '../../services/medication/medication.service';
import { PathologiesService } from '../../services/pathology/pathologies.service';
import { MeasuresService } from '../../services/measure/measures.service';
import { Router } from '@angular/router';

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
          key: 'countryCode',
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
          key: 'name',
          templateOptions: {
            label: 'Medication',
            required: true
          }
        },
        {
          className: 'col-6',
          type: 'select',
          key: 'pharmaceuticCo',
          templateOptions: {
            label: 'House Pharmacy',
            required: true
          },
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.options = this.data.Pharmacies;
            },
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
          className: 'col-4',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            required: true,
          }
        },
        {
          className: 'col-4',
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
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public regionService: RegionsService,
    public medicationService: MedicationService,
    public patholgyService: PathologiesService,
    public measureService: MeasuresService) { }

  ngOnInit(): void {
    console.log('data pased', this.data);
    this.keyOptions = this.data.Keys;
    if (this.data.Parent === 'Region') {
      this.recruitmentFields = this.RegionFields;
    } else {
      if (this.data.Parent === 'Hospital') {
        this.recruitmentFields = this.HospitalFields;
      }
      if (this.data.Parent === 'Medication') {
        this.recruitmentFields = this.MedicationFields;
        console.log('farmacy', this.data.Pharmacies);
      }
      if (this.data.Parent === 'Pathology') {
        this.recruitmentFields = this.PathologyFields;
      }
      if (this.data.Parent === 'byCountry') {
        this.recruitmentFields = this.ByCountryFields;
      }
      if (this.data.Parent === 'general') {
        this.recruitmentFields = this.GeneralFields;
      }
    }
  }
  submit() {
    console.log(this.model);
    if (this.data.Parent === 'Region') {
      this.regionService.createRegion(this.model);
      this.onNoClick();
    }
    if (this.data.Parent === 'Hospital') {
      this.recruitmentFields = this.HospitalFields;
    }
    if (this.data.Parent === 'Medication') {
      this.medicationService.createMedication(this.model);
      this.onNoClick();
    }
    if (this.data.Parent === 'Pathology') {
      this.patholgyService.createPathology(this.model).subscribe(
        data => {
          console.log('data', data);
          this.onNoClick();
        }
      );
    }
    if (this.data.Parent === 'byCountry') {
      this.recruitmentFields = this.ByCountryFields;
    }
    if (this.data.Parent === 'general') {
      this.measureService.createSanitaryMeasure(this.model);
      this.onNoClick();
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

