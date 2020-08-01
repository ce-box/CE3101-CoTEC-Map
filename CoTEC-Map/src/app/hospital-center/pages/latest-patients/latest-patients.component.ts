import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-latest-patients',
  templateUrl: './latest-patients.component.html',
  styleUrls: ['./latest-patients.component.scss']
})
export class LatestPatientsComponent implements OnInit {


  pageName = 'Lista de Pacientes';

  // Change page
  changePatientPage = false;
  dniPatient: number;
  hospitalId: any;

  // Patient list
  patients: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: PatientService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(
      params => {
        if (params && params.special) {
          // tslint:disable-next-line: no-string-literal
          this.hospitalId = params.special;
          console.log('ID: ', this.hospitalId);
        }
      }
    );
  }

  ngOnInit(): void {
    this._http.getPatientsData(this.hospitalId).subscribe(data => {
      this.patients = data;
    });
  }

  // Chage the page to the information patient
  changePage(dniPatient: number){
    this.changePatientPage = true;
    this.dniPatient = dniPatient;
  }

  // Change to  create  patient
  passHospitalId(): void{

    const navigationExtras = {
      queryParams: {
        special: this.hospitalId
      }
    };
    this.router.navigate(['hospitalCenter/patient'], navigationExtras);
  }

}
