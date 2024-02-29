import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  EmailInput: string = '';
  EmailSend: boolean = false;
  alert: boolean = false;

  data: { email: string } = {email: ''};

  sendData() {
    if(this.EmailInput.length === 0){
      this.EmailSend = false;
      this.alert = true;
    }
    if (this.EmailInput.length > 0) {
      //el email debe contener "@" o "."
      if(/\S+@\S+\.\S+/.test(this.EmailInput)){
        this.data.email = this.EmailInput;
        this.EmailSend = true;
      }
      else{
        this.EmailSend = false;
        this.alert = true;
      }
      console.log(this.data);
    } 
  }
  
}
