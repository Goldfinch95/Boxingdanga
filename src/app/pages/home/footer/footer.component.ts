import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  toUp(){
    document.getElementById('carouselExampleCaptions')?.scrollIntoView({behavior: 'smooth'});
    document.getElementById('topNotice')?.scrollIntoView({behavior: 'smooth'})
  }
}
