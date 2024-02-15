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

  data: { email: string } = {email: ''};

  sendData() {
    if(this.EmailInput.length === 0){
      this.EmailSend = true;
    }
    if (this.EmailInput.length > 0) {
      this.data.email = this.EmailInput;
      console.log(this.data);
      this.EmailInput = '';
    } else {
      this.EmailInput = 'Email';
    }
  }
  
}
