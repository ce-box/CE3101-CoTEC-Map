import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  rows = [
    { number: 1 , name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { number: 2 , name: 'Dany', gender: 'Male', company: 'KFC' },
    { number: 3 , name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ name: 'number' }, { prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  selectedValue: any;
  foods = [
    {value: 'byCountry', viewValue: 'Por Pais'},
    {value: 'general', viewValue: 'General'}
  ];

  constructor(
    public adminService: AdminServiceService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'excel_icon',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/imgs/excel_icon.png'));
  }

  ngOnInit(): void {
  }
  getServiceData(){
    this.adminService.getServiceData().subscribe(data => {
      console.log(data);
    });
  }

}
