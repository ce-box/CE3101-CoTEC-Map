import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CoTEC-Map';
  admin = true;
  hospitalCenter = true;
  login = true;
  logout = false;
  changePage = false;

  confirm(userName: string, userPass: string){
    alert('El nombre de usuario o contraseña es incorrecto');
    return false;
  }

  Login() {
    this.changePage = true;
    this.login = false;
  }
}
