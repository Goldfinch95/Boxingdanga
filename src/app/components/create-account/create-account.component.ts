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
