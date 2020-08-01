import { HospitalService } from './../../../admin/services/hospital/hospital.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.scss']
})
export class HomeCenterComponent implements OnInit {

  hospitalName: any;
  hospitalId: any;

  constructor(private route: ActivatedRoute, private router: Router, private _http: HospitalService) { 
    this.route.queryParams.subscribe(
      params => {
        if (params && params.special) {
          // tslint:disable-next-line: no-string-literal
          this.hospitalId = params.special;
          _http.getHospitalByID(this.hospitalId).subscribe(
            data => {
              // tslint:disable-next-line: no-string-literal
              this.hospitalName = data['name'];
              console.log(this.hospitalName);
            }
          );
        }
      }
    );
  }

  ngOnInit(): void {
  }

  passHospitalId(): void{

    const navigationExtras = {
      queryParams: {
        special: this.hospitalId
      }
    };
    this.router.navigate(['hospitalCenter/LastPatients'], navigationExtras);
  }

}
