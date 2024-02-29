import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-tecnicas',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './tecnicas.component.html',
  styleUrl: './tecnicas.component.css'
})
export class TecnicasComponent {

}
