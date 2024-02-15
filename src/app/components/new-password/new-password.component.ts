import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

  PasswordInput: string = '';

  data: { password: string } = { password: '' };

  sendData() {
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
