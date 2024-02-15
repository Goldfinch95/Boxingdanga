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
  PasswordSend: boolean = false;

  data: { password: string } = { password: '' };

  sendData() {
    if(this.PasswordInput.length === 0){
      this.PasswordSend = true;
    }
    if (this.PasswordInput.length > 1) {
      this.data.password = this.PasswordInput;
      console.log(this.data);
      this.PasswordInput = '';
    }
    else{
      this.PasswordInput = 'Agregue la contraseña';
    }
  }
  
}
