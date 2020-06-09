import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
