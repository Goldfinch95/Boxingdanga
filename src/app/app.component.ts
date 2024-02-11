import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;

  clickedCreateAccount = false;
  clickedForgotPassword = false;
  formHidden: boolean = false;

  callCreateAccount(){
    if(this.clickedCreateAccount == false){
      this.formHidden = true;
      this.clickedCreateAccount = true;
    }
  }

  callforgotPassword(){
    if(this.clickedForgotPassword == false){
      this.formHidden = true;
      this.clickedForgotPassword = true;
    }
  }
}
