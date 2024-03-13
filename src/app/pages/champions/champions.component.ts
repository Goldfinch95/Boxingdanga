import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../../components/cards-container/cards.component';
import { Champion } from '../../components/card/card.component';
import * as championData from '../../../assets/champions.json';
CardsComponent;
@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule, CardsComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css',
})
export class ChampionsComponent {
  constructor() {
    this.category = this.categories[0].category;
    this.championCategorySelected = this.championsAll[this.category];
  }
  categories = [
    { category: 'Heavyweight' },
    { category: 'Cruiserweight' },
    { category: 'LightHeavyweight' },
    { category: 'SuperMiddleweight' },
    { category: 'Middleweight' },
    { category: 'SuperWelterweight' },
    { category: 'Welterweight' },
    { category: 'SuperLightweight' },
    { category: 'Lightweight' },
    { category: 'SuperFeatherweight' },
    { category: 'Featherweight' },
    { category: 'SuperBantamweight' },
    { category: 'Bantamweight' },
    { category: 'SuperFlyweight' },
    { category: 'Flyweight' },
    { category: 'LightFlyweight' },
    { category: 'Minimumweight' },
  ];

  championsAll: ChampionsAll = championData;

  category: string;
  championCategorySelected: Champion[];

  change = false;

  onCategoryChange() {
    console.log(this.category);
    this.championCategorySelected = this.championsAll[this.category];
  }
}

interface ChampionsAll {
  [key: string]: Champion[];
}
