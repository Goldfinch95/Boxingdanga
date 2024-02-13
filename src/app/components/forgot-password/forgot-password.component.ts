import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  EmailInput: string = '';
  securityInput: string = '';
  passwordInput: string = '';
  isVisible: boolean = true;
  isVisible2: boolean = true;
  emailSend: boolean = false;
  securitySend: boolean = false;
  click: number = 0;

  sendData(){
    console.log(this.EmailInput);
  if(this.EmailInput.length > 0){
    this.emailSend = true;
    this.isVisible = false;
    console.log(this.click++)
  }
  else{
    this.EmailInput = 'Agregue un Email';
  }

  if(this.emailSend){
    console.log(this.securityInput);
    console.log(this.click++)
    this.EmailInput = '';
    this.securityInput = '';
    if(this.click >= 3){
      this.isVisible2 = !this.isVisible2;
      this.securitySend = true;
      console.log(this.passwordInput)
    }
  }
}
}
