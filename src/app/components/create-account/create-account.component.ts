import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  nameInput: string = '';
  lastNameInput: string = '';
  dateInput: string = '';
  countryInput: string = '';
  EmailInput: string = '';
  PasswordInput: string = '';
  secondPasswordInput: string = '';
  nameSend: boolean = false;
  lastNameSend: boolean = false;
  dateSend: boolean = false;
  countrySend: boolean = false;
  EmailSend: boolean = false;
  PasswordSend: boolean = false;
  secondPasswordSend: boolean = false;
  dataSend:boolean = false;

  data: { name: string; lastName: string; date: string; country: string; email: string; password: string } = {
    name: '',
    lastName: '',
    date: '',
    country: '',
    email: '',
    password: '',
  };

  sendData() {
    if(this.nameInput.length === 0){
      this.nameSend = true;
    }
    if(this.lastNameInput.length === 0){
      this.lastNameSend = true;
    }
    if(this.dateInput.length === 0){
      this.dateSend = true;
    }
    if(this.countryInput.length === 0){
      this.countrySend = true;
    }
    if (this.EmailInput.length === 0) {
      this.EmailSend = true;
    }
    if (this.PasswordInput.length === 0) {
      this.PasswordSend = true;
    }
    if (this.secondPasswordInput.length === 0) {
      this.secondPasswordSend = true;
    }
    if (this.EmailInput.length > 1 || this.PasswordInput.length > 1) {
      this.data.name = this.nameInput;
      this.data.lastName = this.lastNameInput;
      this.data.date = this.dateInput;
      this.data.country = this.countryInput;
      this.data.email = this.EmailInput;
      if(this.PasswordInput === this.secondPasswordInput){
        this.data.password = this.PasswordInput;
      }
      this.dataSend = true;
      console.log(this.data);
      console.log('cuenta creada con éxito')
    }
  }
}
