import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
CardsComponent
@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, FormsModule,CardsComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css',
})
export class ChampionsComponent {

  categories = [
    {  category: "Heavyweight" },
    {  category: "Cruiserweight" },
    {  category: "Light Heavyweight" },
    {  category: "Super Middleweight" },
    {  category: "Middleweight" },
    {  category: "Super Welterweight" },
    {  category: "Welterweight" },
    {  category: "Super Lightweight" },
    {  category: "Lightweight" },
    {  category: "Super Featherweight" },
    {  category: "Featherweight" },
    {  category: "Super Bantamweight" },
    {  category: "Bantamweight" },
    {  category: "Super Flyweight" },
    {  category: "Flyweight" },
    {  category: "Light Flyweight" },
    {  category: "Minimumweight" }
  ];

  heavyweightChampions = [
    {
      img: '../../../assets/champions/oleksandr-usyk.webp',
      name: 'Oleksandr Oleksándrovich Usyk',
      age: 37,
      height: '1.90',
      title: 'IBF-IBO-WBA-WBO',
      victory: 21,
      knockout: 14,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Oleksandr_Usyk',
      boxrec: 'https://boxrec.com/en/box-pro/659772',
    },
    {
      img: '../../../assets/champions/tyson-fury.jpg',
      name: 'Tyson Luke Fury',
      age: 35,
      height: 2.02,
      title: 'WBC',
      victory: 34,
      knockout: 24,
      defeat: 0,
      draw: 1,
      wiki: 'https://es.wikipedia.org/wiki/Tyson_Fury',
      boxrec: 'https://boxrec.com/en/proboxer/479205',
    },
    {
      img: '../../../assets/champions/manuel-charr.jpg',
      name: 'Mahmoud Omeirat Charr',
      age: 39,
      height: 1.92,
      title: 'WBA',
      victory: 34,
      knockout: 20,
      defeat: 4,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Mahmoud_Charr',
      boxrec: 'https://boxrec.com/en/box-pro/314362',
    },
    {
      img: '../../../assets/champions/zhilei-zhang.jpg',
      name: 'Zhang Zhilei',
      age: 40,
      height: 1.98,
      title: 'WB0',
      victory: 26,
      knockout: 21,
      defeat: 1,
      draw: 1,
      wiki: 'https://es.wikipedia.org/wiki/Zhang_Zhilei',
      boxrec: 'https://boxrec.com/en/proboxer/479205',
    },
  ];


  boxerData = boxerCategory;

  change = false;

  

  onCategoryChange(){
    this.change = true;
    console.log(this.boxerData);
  }

  

}

export class boxerCategory{

  Category: string;
  constructor(){
    this.Category = '';
  }
}
