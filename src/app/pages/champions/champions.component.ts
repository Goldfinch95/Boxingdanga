import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css'
})
export class ChampionsComponent {

}
