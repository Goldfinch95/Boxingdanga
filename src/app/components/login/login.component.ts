import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  EmailInput: string = '';
  PasswordInput: string = '';
  EmailSend: boolean = false;
  PasswordSend: boolean = false;

  data: { email: string, password: string } = {email: '', password: ''};

  sendData(){
    if(this.EmailInput.length === 0){
      this.EmailSend = true;
    }
    if(this.PasswordInput.length === 0){
      this.PasswordSend = true;
    }
    if(this.EmailInput.length > 1 || this.PasswordInput.length > 1){
    this.data.email = this.EmailInput;
    this.data.password = this.PasswordInput;
    console.log(this.data)
    }
  }
}
