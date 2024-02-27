import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SidenavComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBars = faBars;

  toUp(){
    document.getElementById('carouselExampleCaptions')?.scrollIntoView({behavior: 'smooth'})
  }
}
