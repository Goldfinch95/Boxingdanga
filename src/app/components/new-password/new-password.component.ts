import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

  PasswordInput: string = '';
  secondPasswordInput: string = '';
  PasswordSend: boolean = false;
  secondPasswordSend: boolean = false;

  data: { password: string } = { password: '' };

  sendData() {
    if(this.PasswordInput.length === 0){
      this.PasswordSend = true;
    }
    if(this.secondPasswordInput.length === 0){
      this.secondPasswordSend = true;
    }
    if (this.PasswordInput.length > 1 && this.secondPasswordInput.length > 1) {
      if(this.PasswordInput === this.secondPasswordInput){
        this.data.password = this.PasswordInput;
        this.PasswordSend = true;
        console.log('contraseñas cambiadas');
      }
      console.log(this.data);
      this.PasswordInput = '';
      this.secondPasswordInput = '';
    }
  }
  
}
