import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;

  clickedCreateAccount = false;
  clickedForgotPassword = false;
  formHidden: boolean = false;

  EmailInput: string = '';
  PasswordInput: string = '';

  data: { email: string, password: string }[] = [];

  sendData(){
    this.data.push({ email: this.EmailInput, password: this.PasswordInput });
    console.log(this.data)
    this.EmailInput = '';
    this.PasswordInput = '';
  }
}
