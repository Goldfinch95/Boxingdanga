import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface PasswordVisibility {
  password1: boolean;
  password2: boolean;
}

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [FormsModule, RouterLink, NgbModule, FontAwesomeModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  PasswordInput: string = '';
  secondPasswordInput: string = '';
  PasswordSend: boolean = false;
  secondPasswordSend: boolean = false;
  showPassword = false;
  showIcon = false;
  validate = false;

  data: { password: string } = { password: '' };

  passwordVisibility: PasswordVisibility = {
    password1: false,
    password2: false,
  };

  togglePasswordVisibility(passwordType: keyof PasswordVisibility) {
    this.passwordVisibility[passwordType] =
      !this.passwordVisibility[passwordType];
  }

  getPasswordType() {
    return this.showPassword ? 'text' : 'password';
  }

  sendData() {
    if (this.PasswordInput.length === 0) {
      this.PasswordSend = true;
    }
    if (this.secondPasswordInput.length === 0) {
      this.secondPasswordSend = true;
    } else {
      if (
        this.PasswordInput.length >= 1 &&
        this.secondPasswordInput.length > 1
      ) {
        //mínimo 6, máximo 12 caracteres
        if (this.PasswordInput.length >= 6 && this.PasswordInput.length <= 12) {
          //contiene una mayúscula
          if (/[A-Z]/.test(this.PasswordInput)) {
            this.data.password = this.PasswordInput;
            this.PasswordSend = false;
            console.log(this.data);
            console.log('contraseñas cambiadas');
            this.validate = true;
          }
        } else {
          this.PasswordSend = true;
        }
      }
    }
  }
}
