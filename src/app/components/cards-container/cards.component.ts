import { Component, Input } from '@angular/core';
import { CardComponent, Champion } from '../card/card.component';
import { ChampionsComponent } from '../../pages/champions/champions.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, ChampionsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() categorySelected!: Champion[];
}
