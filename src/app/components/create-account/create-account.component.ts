import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

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

