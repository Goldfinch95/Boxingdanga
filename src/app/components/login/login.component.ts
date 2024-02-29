import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, FontAwesomeModule, NgbModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  EmailInput: string = '';
  PasswordInput: string = '';
  EmailSend: boolean = false;
  PasswordSend: boolean = false;
  showPassword = false;
  showIcon = false;

  data: { email: string; password: string } = { email: '', password: '' };

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }

  getPasswordType() {
    return this.showPassword ? 'text' : 'password';
  }

  sendData() {
    if (this.EmailInput.length === 0) {
      this.EmailSend = true;
    }
    if(this.PasswordInput.length === 0){
      this.PasswordSend = true;
    }
    
    else {
      if (this.EmailInput.length >= 1) {
        //el email debe contener "@" o "."
        if(/\S+@\S+\.\S+/.test(this.EmailInput)){
          this.data.email = this.EmailInput;
          this.EmailSend = false;
        }
        //mínimo 6, máximo 12 caracteres
        if (this.PasswordInput.length >= 6 && this.PasswordInput.length <= 12) {
          //contiene una mayúscula
          if (/[A-Z]/.test(this.PasswordInput)) {
            this.data.password = this.PasswordInput;
            this.PasswordSend = false;
            console.log(this.data);
        }
        }
        else {
          this.PasswordSend = true;
        }
      }
    }
  }
}
