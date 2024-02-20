import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent {
  PasswordInput: string = '';
  PasswordSend: boolean = false;

  data: { password: string } = { password: '' };

  sendData() {
    
    this.PasswordSend = true;

    if(this.PasswordInput.length >= 6){
      this.PasswordSend = true;
    }
    if (this.PasswordInput.length > 1) {
      this.data.password = this.PasswordInput;
      console.log(this.data);
      this.PasswordInput = '';
    }
  }
}
