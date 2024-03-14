import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CardsComponent } from '../../components/cards-container/cards.component';
import { FormsModule } from '@angular/forms';
import { Champion } from '../../components/card/card.component';
import * as championData from '../../../assets/champions.json';

@Component({
  selector: 'app-tecnicas',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardsComponent, FormsModule],
  templateUrl: './tecnicas.component.html',
  styleUrl: './tecnicas.component.css'
})
export class TecnicasComponent {

  constructor() {
    this.category = this.categories[0].category;
    this.championCategorySelected = this.championsAll[this.category];
  }

  categories = [
    { category: 'Heavyweight', name: "Heavyweight", minWeight: 90.72, maxWeight: Infinity },
    { category: 'Cruiserweight', name: "Cruiserweight", minWeight: 83.914, maxWeight: 90.72 },
    { category: 'LightHeavyweight', name: "Light Heavyweight", minWeight: 79.378, maxWeight: 83.914 },
    { category: 'SuperMiddleweight', name: "Super Middleweight", minWeight: 76.204, maxWeight: 79.378 },
    { category: 'Middleweight', name: "Middleweight", minWeight: 72.574, maxWeight: 76.204 },
    { category: 'SuperWelterweight', name: "Super Welterweight", minWeight: 69.853, maxWeight: 72.574 },
    { category: 'Welterweight', name: "Welterweight", minWeight: 66.678, maxWeight: 69.853 },
    { category: 'SuperLightweight', name: "Super Lightweight", minWeight: 63.503, maxWeight: 66.678 },
    { category: 'Lightweight', name: "Lightweight", minWeight: 61.235, maxWeight: 63.503 },
    { category: 'SuperFeatherweight', name: "Super Featherweight", minWeight: 59.874, maxWeight: 61.235 },
    { category: 'Featherweight', name: "Featherweight", minWeight: 57.153, maxWeight: 59.874 },
    { category: 'SuperBantamweight', name: "Super Bantamweight", minWeight: 55.338, maxWeight: 57.153 },
    { category: 'Bantamweight', name: "Bantamweight", minWeight: 53.525, maxWeight: 55.338 },
    { category: 'SuperFlyweight', name: "Super Flyweight", minWeight: 52.163, maxWeight: 53.525 },
    { category: 'Flyweight', name: "Flyweight", minWeight: 50.802, maxWeight: 52.163 },
    { category: 'LightFlyweight', name: "Light Flyweight", minWeight: 49.009, maxWeight: 50.802 },
    { category: 'Minimumweight', name: "Minimumweight",minWeight: 47.627, maxWeight: 49.009 },
  ];

  championsAll: ChampionsAll = championData;
  category: string;
  weightInput: number = 0;
  dataWasSend: boolean = false;
  boxerWeight: string = '';
  championCategorySelected: Champion[];

  sendData() {
    if(this.weightInput === 0 || this.weightInput === null){
      return
    }
    else{
      this.dataWasSend = true;
    for(const category of this.categories){
      if(this.weightInput >= category.minWeight && this.weightInput < category.maxWeight){
        this.boxerWeight = category.name
        this.category = category.category
        this.championCategorySelected = this.championsAll[this.category];
        return
      }
    }
    }
  }
}
interface ChampionsAll {
  [key: string]: Champion[];
}