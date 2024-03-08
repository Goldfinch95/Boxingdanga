import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.loginData = new Login();
  }
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  loginData: Login;
  EmailSend: boolean = false;
  PasswordSend: boolean = false;
  showPassword = false;
  showIcon = false;
  canSend = true;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }

  getPasswordType() {
    return this.showPassword ? 'text' : 'password';
  }

  sendData() {
    if (this.loginData.Email.length === 0) {
      this.EmailSend = true;
    }
    if (this.loginData.Password.length === 0) {
      this.PasswordSend = true;
    } else {
      if (
        this.loginData.Email.length >= 1 &&
        /\S+@\S+\.\S+/.test(this.loginData.Email)
      ) {
        //el email debe contener "@" o "."
        this.EmailSend = false;
      } else {
        this.canSend = false;
      }
      //mínimo 6, máximo 12 caracteres
      if (
        this.loginData.Password.length >= 6 &&
        this.loginData.Password.length <= 12 &&
        /[A-Z]/.test(this.loginData.Password)
      ) {
        //contiene una mayúscula
        this.PasswordSend = false;
      } else {
        this.canSend = false;
        this.PasswordSend = true;
      }
      if (this.canSend) {
        this.http
          .get('http://localhost:8000/clientes')
          .subscribe((res: any) => {
            const users = res.data[0];
            const userFound = users.filter(
              (user: any) =>
                user.email === this.loginData.Email &&
                user.password === this.loginData.Password
            );
            if (userFound.length > 0) {
              alert('Acceso exitoso');
              this.router.navigateByUrl('/home');
            } else {
              alert('Email y/o password incorrecta.');
            }
          });
      }
    }
  }
}

export class Login {
  Email: string;
  Password: string;
  constructor() {
    this.Email = '';
    this.Password = '';
  }
}
