import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
/**
 * Component
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  /**
   * Boolean for the valid email
   */
  invalidEmail: boolean = false;
  /**
   * Boolean for the valid password
   */
  invalidPassword: boolean = false;
  /**
   * Data of all the clients
   */
  data: any;
  /**
   * Is a Form Group that will valid the entry of the credential
   */
  public ComponentLoginForm: FormGroup;
  /**
   * Constructor will contain the form validators
   * @param cdr Detect Changes in the ngOnInit
   * @param formBuilder Charge of form and validations
   * @param toastController Controller of Toast Component
   * @param router Controller for the Router
   */
  constructor(
    private cdr: ChangeDetectorRef,
    public toastController: ToastController,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
      /**
       * Funtion that valid the password as an input required and the email with an specific patter
       */
      this.ComponentLoginForm = formBuilder.group({
        password: ['', Validators.required],
        email: ['', Validators.compose([ Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}'), Validators.required])]
      });
   }

  ngOnInit() {
  }
  /**
   * Funtion for send all the information of the forms
   */
  summit(){
    // The credentials was valid so the value containt an object with the values
    if (!this.ComponentLoginForm.valid){
      console.log('Invalid');
      this.presentToastEmail('Invalid credentials', 'danger');
      if (!this.ComponentLoginForm.controls.email.valid){
        console.log('email invalido');
        this.invalidEmail = true;
      }
      else if (!this.ComponentLoginForm.controls.password.valid){
        console.log('password invalid');
        this.invalidPassword = true;
      }

    }
    else{
      this.presentToastEmail('Valid credentials', 'success');
      this.router.navigateByUrl('home');
    }
  }
  /**
   * Funtion that show Toast notification on the aplication at the begging for show the proper way to enter the email
   */
  async presentToastEmail( messageT: string, colorT: string) {
    const toast = await this.toastController.create({
      message: messageT,
      color: colorT,
      duration: 4000
    });
    toast.present();
  }
}
