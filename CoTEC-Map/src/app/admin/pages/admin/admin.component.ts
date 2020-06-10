import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ name: '#' },{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor(public adminService: AdminServiceService) {
    this.getServiceData();
  }

  ngOnInit(): void {
  }
  getServiceData(){
    this.adminService.getServiceData().subscribe(data => {
      console.log(data);
    });
  }

}
