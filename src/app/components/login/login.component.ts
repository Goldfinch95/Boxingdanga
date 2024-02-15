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

  data: { email: string, password: string } = {email: '', password: ''};

  sendData(){
    this.data.email = this.EmailInput;
    this.data.password = this.PasswordInput;
    console.log(this.data)
    this.EmailInput = '';
    this.PasswordInput = '';
  }
}
