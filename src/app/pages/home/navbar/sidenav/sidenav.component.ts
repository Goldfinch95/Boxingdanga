import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  toHome(){
    document.getElementById('carouselExampleCaptions')?.scrollIntoView({behavior: 'smooth'})
    
  }

  toBlogs(){
    document.getElementById('blogs')?.scrollIntoView({behavior: 'smooth'})
  }

  toFooter(){
    document.getElementById('footer')?.scrollIntoView({behavior: 'smooth'})
  }
}
