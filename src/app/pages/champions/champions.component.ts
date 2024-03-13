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
  //arranque de componente, lo primero que se hace.
  constructor() {
    this.category = this.categories[0].category;
    this.championCategorySelected = this.championsAll[this.category];
  }
  categories = [
    { category: 'Heavyweight', name: 'Heavyweight' },
    { category: 'Cruiserweight', name: 'Cruiserweight' },
    { category: 'LightHeavyweight', name: 'Light Heavyweight' },
    { category: 'SuperMiddleweight', name: 'Super Middleweight' },
    { category: 'Middleweight', name: 'Middleweight' },
    { category: 'SuperWelterweight', name: 'Super Welterweight' },
    { category: 'Welterweight', name: 'Welterweight' },
    { category: 'SuperLightweight', name: 'Super Lightweight' },
    { category: 'Lightweight', name: 'Lightweight' },
    { category: 'SuperFeatherweight', name: 'Super Featherweight' },
    { category: 'Featherweight', name: 'Featherweight' },
    { category: 'SuperBantamweight', name: 'Super Bantamweight' },
    { category: 'Bantamweight', name: 'Bantamweight' },
    { category: 'SuperFlyweight', name: 'Super Flyweight' },
    { category: 'Flyweight', name: 'Flyweight' },
    { category: 'LightFlyweight', name: 'Light Flyweight' },
    { category: 'Minimumweight', name: 'Minimumweight' },
  ];

  championsAll: ChampionsAll = championData;

  category: string;
  championCategorySelected: Champion[];

  onCategoryChange() {
    this.championCategorySelected = this.championsAll[this.category];
  }
}

interface ChampionsAll {
  [key: string]: Champion[];
}
