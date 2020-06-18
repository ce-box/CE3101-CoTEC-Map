import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
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
            label: "Hospital Center's director",
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
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.model);
  }
}
