import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CoTEC-Map';
  admin = false;
  hospitalCenter = false;
  login = true;
  logout = false;
  changePage = false;
  loginAdmin: any;
  loginHospital: any;
  access = false;


  // tslint:disable-next-line: variable-name
  constructor(private _http: LoginService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  userLogin(user: string, password: string) {
    this._http.postAdminLogin(user, password).subscribe(
      data => {
        console.log(data);
        this.admin = true;
        this.login = false;
        this.logout = true;
        this.changePage = false;
        this.access = true;
        this.router.navigate(['/admin']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );


    if (!this.access) {
      this._http.postHopitalLogin(user, password).subscribe(
        data => {
          console.log(data['hospital_Id']);
          this.hospitalCenter = true;
          this.login = false;
          this.logout = true;
          this.changePage = false;

          const navigationExtras = {
            queryParams: {
              // Send deliveryMan info to next page
              // tslint:disable-next-line: no-string-literal
              special: data['hospital_Id']
            }
          };
          this.router.navigate(['/hospitalCenter'], navigationExtras);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          //alert('Oops! Usuario Incorrecto!');
        }
      );
    }
  }

  Login() {
    this.changePage = true;
    this.login = false;
  }

}
