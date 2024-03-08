import { Component } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css',
})
export class ChampionsComponent {
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

  cruiserweightChampions = [
    {
      boxer: 'Arsen Goulamirian',
      img: '../../../assets/champions/arsen-goulamirian.png',
      nickname: 'Feroz',
      name: 'Arsen Goulamirian',
      age: 36,
      height: 1.86,
      title: 'WBA',
      victory: 27,
      knockout: 19,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Arsen_Goulamirian',
      boxrec: 'https://boxrec.com/en/box-pro/572144',
    },
    {
      boxer: 'Norair Mikaeljan',
      img: '../../../assets/champions/Noel-Mikaelyan.jpg',
      name: 'Norair Mikaeljan',
      age: 33,
      height: 1.92,
      title: 'WBC',
      victory: 27,
      knockout: 12,
      defeat: 2,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Noel_Mikaelian',
      boxrec: 'https://boxrec.com/en/proboxer/571652',
    },
    {
      boxer: 'Chris Billam-Smith',
      img: '../../../assets/champions/chris-billam-smith.jpg',
      name: 'Chris Billam-Smith',
      age: 33,
      height: 1.91,
      title: 'WBO',
      victory: 19,
      knockout: 13,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Chris_Billam-Smith',
      boxrec: 'https://boxrec.com/en/box-pro/811275',
    },
  ];

  lightheavyweightChampions = [
    {
      boxer: 'Dmitry Bivol',
      img: '../../../assets/champions/dmitri-bivol.webp',
      name: 'Dmitry Yuryevich Bivol',
      age: 33,
      height: 1.83,
      title: 'IBO-WBA',
      victory: 22,
      knockout: 11,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Dmitry_Bivol',
      boxrec: 'https://boxrec.com/en/box-pro/703924',
    },
    {
      boxer: 'Artur Beterbiyev',
      img: '../../../assets/champions/artur-beterbiev.jpg',
      name: 'Artur Asilbekovich Beterbiev',
      age: 39,
      height: 1.82,
      title: 'IBC-WBC-WBO',
      victory: 20,
      knockout: 20,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Artur_Beterbiyev',
      boxrec: 'https://boxrec.com/en/box-pro/646981',
    },
  ];

  superMiddleweightChampions = [
    {
      boxer: 'Saúl Álvarez',
      img: '../../../assets/champions/saul-alvarez.jpg',
      name: 'Santos Saúl Álvarez Barragán',
      age: 33,
      height: 1.73,
      title: 'IBF-WBA-WBC-WBO',
      victory: 60,
      knockout: 39,
      defeat: 2,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Saúl_Álvarez',
      boxrec: 'https://boxrec.com/en/box-pro/348759',
    },
    {
      boxer: 'David Morrell',
      img: '../../../assets/champions/david-morrel.jpg',
      name: 'Osvary David Morrell Gutierrez Jr.',
      age: 26,
      height: 1.85,
      title: 'WBA',
      victory: 10,
      knockout: 9,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/David_Morrell_(boxer)',
      boxrec: 'https://boxrec.com/en/box-pro/852450',
    },
    {
      boxer: 'David Benavidez',
      img: '../../../assets/champions/david-benavidez.webp',
      name: 'Anthony David Benavidez',
      age: 27,
      height: 1.88,
      title: 'WBC',
      victory: 28,
      knockout: 24,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/David_Benavidez',
      boxrec: 'https://boxrec.com/en/box-pro/672259',
    },
  ];

  mediumweightChampions = [
    {
      boxer: 'Erislandy Lara',
      img: '../../../assets/champions/erislandy-lara.webp',
      name: 'Erislandy Lara Santoya',
      age: 40,
      height: 1.75,
      title: 'WBA',
      victory: 29,
      knockout: 17,
      defeat: 3,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Erislandy_Lara',
      boxrec: 'https://boxrec.com/en/box-pro/457231',
    },
    {
      boxer: 'Jermall Charlo',
      img: '../../../assets/champions/jermall-charlo.jpg',
      name: 'Jermall Deandre Charlo',
      age: 33,
      height: 1.85,
      title: 'WBC',
      victory: 33,
      knockout: 22,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Jermall_Charlo',
      boxrec: 'https://boxrec.com/en/box-pro/471634',
    },
    {
      boxer: 'Carlos Adames',
      img: '../../../assets/champions/carlos-adames.webp',
      name: 'Carlos Adames',
      age: 29,
      height: 1.8,
      title: 'WBC',
      victory: 23,
      knockout: 18,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Carlos_Adames',
      boxrec: 'https://boxrec.com/en/box-pro/723287',
    },
    {
      boxer: 'Zhanibek Alimkhanuly',
      img: '../../../assets/champions/janibek-alimkhanuly.webp',
      name: 'Zhanibek Alimkhanuly',
      age: 30,
      height: 1.82,
      title: 'IBF-WBO',
      victory: 15,
      knockout: 10,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Zhanibek_Alimjanuly',
      boxrec: 'https://boxrec.com/en/box-pro/774417',
    },
  ];
  juniorMiddleweightChampions = [
    {
      boxer: 'Tim Tszyu',
      img: '../../../assets/champions/tim-tszyu.jpg',
      name: 'Timofei Konstantinovich Tszyu',
      age: 29,
      height: 1.74,
      title: 'WB0',
      victory: 24,
      knockout: 17,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Tim_Tszyu',
      boxrec: 'https://boxrec.com/en/box-pro/783149',
    },
  ];

  welterweightChanmpions = [
    {
      boxer: 'Terence Crawford',
      img: '../../../assets/champions/terence-crawford.jpg_large',
      name: 'Terence Allan Crawford',
      age: 36,
      height: 1.73,
      title: 'WBA-WBC-WB0',
      victory: 40,
      knockout: 31,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Terence_Crawford',
      boxrec: 'https://boxrec.com/en/box-pro/447121',
    },
    {
      boxer: 'Eimantas Stanionis',
      img: '../../../assets/champions/eimantas-stanionis.jpg',
      name: 'Eimantas Stanionis',
      age: 29,
      height: 1.73,
      title: 'WBA',
      victory: 14,
      knockout: 9,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Eimantas_Stanionis',
      boxrec: 'https://boxrec.com/en/box-pro/791796',
    },
    {
      boxer: 'Mario Barrios',
      img: '../../../assets/champions/mario-barrios.jpg',
      name: 'Mario Thomas Barrios',
      age: 28,
      height: 1.83,
      title: 'WBC',
      victory: 28,
      knockout: 18,
      defeat: 2,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Mario_Barrios',
      boxrec: 'https://boxrec.com/en/box-pro/665878',
    },
    {
      boxer: 'Jaron Ennis',
      img: '../../../assets/champions/jaron-ennis.jpg',
      name: 'Jaron Ennis',
      age: 26,
      height: 1.78,
      title: 'IBF',
      victory: 31,
      knockout: 28,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Jaron_Ennis',
      boxrec: 'https://boxrec.com/en/box-pro/756515',
    },
  ]

  juniorWelterweightChampions = [
    {
      boxer: 'Rolando Romero',
      img: '../../../assets/champions/rolando-romero.jpg',
      name: 'Rolando Florencio Romero Moreno',
      age: 28,
      height: 1.73,
      title: 'WBA',
      victory: 15,
      knockout: 13,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Rolando_Romero',
      boxrec: 'https://boxrec.com/en/box-pro/781366',
    },
    {
      boxer: 'Ismael Barroso',
      img: '../../../assets/champions/ismael-barroso.webp',
      name: 'Ismael Jose Barroso Bernay',
      age: 41,
      height: 1.74,
      title: 'WBA',
      victory: 25,
      knockout: 23,
      defeat: 4,
      draw: 2,
      wiki: 'https://en.wikipedia.org/wiki/Ismael_Barroso',
      boxrec: 'https://boxrec.com/en/box-pro/326019',
    },
    {
      boxer: 'Devin Haney',
      img: '../../../assets/champions/david-haney.jpg',
      name: 'Devin Miles Haney',
      age: 25,
      height: 1.73,
      title: 'WBC',
      victory: 31,
      knockout: 15,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Devin_Haney',
      boxrec: 'https://boxrec.com/en/box-pro/741718',
    },
    {
      boxer: 'Subriel Matías',
      img: '../../../assets/champions/subriel-matias.jpg',
      name: 'Subriel Ahmed Matías Matthew',
      age: 31,
      height: 1.73,
      title: 'IBF',
      victory: 20,
      knockout: 20,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Subriel_Matías',
      boxrec: 'https://boxrec.com/en/box-pro/749669',
    },
    {
      boxer: 'Teófimo López',
      img: '../../../assets/champions/teofimo-lopez.webp',
      name: 'Teófimo Andrés López Rivera',
      age: 26,
      height: 1.73,
      title: 'WB0',
      victory: 20,
      knockout: 13,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Teofimo_Lopez',
      boxrec: 'https://boxrec.com/en/box-pro/776269',
    },
  ]

  lightWeightChampions = [
    {
      boxer: 'Gervonta Davis',
      img: '../../../assets/champions/gervonta-davis.jpg',
      name: 'Gervonta Davis',
      age: 29,
      height: 1.66,
      title: 'WBA',
      victory: 29,
      knockout: 27,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Gervonta_Davis',
      boxrec: 'https://boxrec.com/en/box-pro/643387',
    },
    {
      boxer: 'Shakur Stevenson',
      img: '../../../assets/champions/shakur-stevenson.jpg',
      name: 'Ash-Shakur Nafi-Shahid Stevenson',
      age: 26,
      height: 1.73,
      title: 'WBC',
      victory: 21,
      knockout: 10,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Shakur_Stevenson',
      boxrec: 'https://boxrec.com/en/box-pro/790719',
    },
  ]
  juniorSuperFeatherweightChampions = [
    {
      boxer: 'Lamont Roach',
      img: '../../../assets/champions/lamont-roach.webp',
      name: 'Lamont Roach Jr',
      age: 28,
      height: 1.70,
      title: 'WBA',
      victory: 24,
      knockout: 9,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Lamont_Roach_Jr.',
      boxrec: 'https://boxrec.com/en/box-pro/683920',
    },
    {
      boxer: `O'Shaquie Foster`,
      img: '../../../assets/champions/oshaquie-foster.jpg',
      name: 'O’Shanique Dominique Williams Foster',
      age: 30,
      height: 1.74,
      title: 'WBC',
      victory: 22,
      knockout: 12,
      defeat: 2,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/O%27Shaquie_Foster',
      boxrec: 'https://boxrec.com/en/box-pro/626343',
    },
    {
      boxer: 'Joe Cordina',
      img: '../../../assets/champions/joe-cordina.webp',
      name: 'Joseph Samuel',
      age: 32,
      height: 1.75,
      title: 'IBF',
      victory: 17,
      knockout: 9,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Joe_Cordina',
      boxrec: 'https://boxrec.com/en/box-pro/794105',
    },
    {
      boxer: 'Emanuel Navarrete',
      img: '../../../assets/champions/emanuel-navarrete.jpg',
      name: 'Emanuel Navarrete Martinez',
      age: 29,
      height: 1.70,
      title: 'WBO',
      victory: 38,
      knockout: 31,
      defeat: 1,
      draw: 1,
      wiki: 'https://en.wikipedia.org/wiki/Emanuel_Navarrete',
      boxrec: 'https://boxrec.com/en/box-pro/602423',
    },
  ]

  featherweightChampions = [
    {
      boxer: 'Raymond Ford',
      img: '../../../assets/champions/raymond-ford.png',
      name: 'Raymond Ford',
      age: 24,
      height: 1.68,
      title: 'WBA',
      victory: 15,
      knockout: 8,
      defeat: 0,
      draw: 1,
      wiki: 'https://en.wikipedia.org/wiki/Raymond_Ford',
      boxrec: 'https://boxrec.com/en/box-pro/861531',
    },
    {
      boxer: 'Rey Vargas',
      img: '../../../assets/champions/rey-vargas.webp',
      name: 'Rey Geovani Vargas Roldán',
      age: 33,
      height: 1.72,
      title: 'WBC',
      victory: 36,
      knockout: 22,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Rey_Vargas',
      boxrec: 'https://boxrec.com/en/box-pro/542148',
    },
    {
      boxer: 'Brandon Figueroa',
      img: '../../../assets/champions/brandon-figueroa.jpg',
      name: 'Brandon Lee Figueroa',
      age: 27,
      height: 1.73,
      title: 'WBC',
      victory: 24,
      knockout: 18,
      defeat: 1,
      draw: 1,
      wiki: 'https://en.wikipedia.org/wiki/Brandon_Figueroa',
      boxrec: 'https://boxrec.com/en/box-pro/718399',
    },
    {
      boxer: 'Luis Alberto López',
      img: '../../../assets/champions/luis-alberto-lopez.jpg',
      name: 'Luis Alberto López Vargas',
      age: 30,
      height: 1.63,
      title: 'IBF',
      victory: 30,
      knockout: 17,
      defeat: 2,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Luis_Alberto_López_(boxeador)',
      boxrec: 'https://boxrec.com/en/box-pro/741197',
    },
    {
      boxer: 'Rafael Espinoza',
      img: '../../../assets/champions/rafael-espinoza.webp',
      name: 'Rafael Espinoza Zepeda',
      age: 29,
      height: 1.85,
      title: 'WBO',
      victory: 24,
      knockout: 20,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Rafael_Espinoza',
      boxrec: 'https://boxrec.com/en/box-pro/668600',
    },
  ]

  juniorSuperBantamweightChampions = [
    {
      boxer: 'Naoya Inoue',
      img: '../../../assets/champions/naoya-inoue.jpg',
      name: 'Naoya Inoue',
      age: 30,
      height: 1.65,
      title: 'IBF-WBA-WBC-WBO',
      victory: 26,
      knockout: 23,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Naoya_Inoue',
      boxrec: 'https://boxrec.com/en/box-pro/628407',
    },
  ]

  BantamweightChampions = [
    {
      boxer: 'Takuma Inoue',
      img: '../../../assets/champions/takuma-inoue.jpg',
      name: 'Takuma Inoue',
      age: 28,
      height: 1.64,
      title: 'WBA',
      victory: 19,
      knockout: 5,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Takuma_Inoue',
      boxrec: 'https://boxrec.com/en/box-pro/667667',
    },
    {
      boxer: 'Junto Nakatani',
      img: '../../../assets/champions/junto-nakatani.jpg',
      name: 'Junto Nakatani',
      age: 26,
      height: 1.72,
      title: 'WBC',
      victory: 27,
      knockout: 20,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Junto_Nakatani',
      boxrec: 'https://boxrec.com/en/box-pro/718508',
    },
    {
      boxer: 'Emmanuel Rodríguez',
      img: '../../../assets/champions/emmanuel-rodriguez.jpg',
      name: 'Emmanuel Rodriguez Vazquez',
      age: 31,
      height: 1.68,
      title: 'IBF',
      victory: 22,
      knockout: 13,
      defeat: 2,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Emmanuel_Rodríguez',
      boxrec: 'https://boxrec.com/en/box-pro/614887',
    },
    {
      boxer: 'Jason Moloney',
      img: '../../../assets/champions/jason-moloney.webp',
      name: 'Jason Moloney',
      age: 33,
      height: 1.65,
      title: 'WBO',
      victory: 27,
      knockout: 19,
      defeat: 2,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Jason_Moloney',
      boxrec: 'https://boxrec.com/en/box-pro/693965',
    },
  ]

  juniorBantamweightChampions = [
    {
      boxer: 'Kazuto Ioka',
      img: '../../../assets/champions/kazuto-ioka.jpg',
      name: 'Kazuto Ioka',
      age: 34,
      height: 1.64,
      title: 'WBA',
      victory: 31,
      knockout: 16,
      defeat: 2,
      draw: 1,
      wiki: 'https://en.wikipedia.org/wiki/Kazuto_Ioka',
      boxrec: 'https://boxrec.com/en/box-pro/483786',
    },
    {
      boxer: 'Juan Francisco Estrada',
      img: '../../../assets/champions/juan-estrada.jpg',
      name: 'Juan Francisco Estrada Romero',
      age: 33,
      height: 1.63,
      title: 'WBC',
      victory: 44,
      knockout: 28,
      defeat: 3,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Juan_Francisco_Estrada',
      boxrec: 'https://boxrec.com/en/box-pro/467843',
    },
    {
      boxer: 'Carlos Cuadras',
      img: '../../../assets/champions/carlos-cuadras.jpg',
      name: 'Carlos Cuadras Quiroa',
      age: 35,
      height: 1.63,
      title: 'WBC',
      victory: 42,
      knockout: 28,
      defeat: 5,
      draw: 1,
      wiki: 'https://en.wikipedia.org/wiki/Carlos_Cuadras',
      boxrec: 'https://boxrec.com/en/box-pro/453289',
    },
    {
      boxer: 'Fernando Martínez',
      img: '../../../assets/champions/fernando-martinez.jpg',
      name: 'Fernando Daniel Martinez',
      age: 32,
      height: 1.57,
      title: 'IBF',
      victory: 16,
      knockout: 9,
      defeat: 0,
      draw: 0,
      wiki: 'https://es.wikipedia.org/wiki/Fernando_Martínez_(boxeador)',
      boxrec: 'https://boxrec.com/en/box-pro/809729',
    },
    {
      boxer: 'Kosei Tanaka',
      img: '../../../assets/champions/kosei-tanaka.png',
      name: 'Kosei Tanaka',
      age: 28,
      height: 1.64,
      title: 'WBO',
      victory: 20,
      knockout: 11,
      defeat: 1,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Kosei_Tanaka',
      boxrec: 'https://boxrec.com/en/box-pro/666339',
    },
  ]

  flyweightChampions = [
    {
      boxer: 'Seigo Yuri Akui',
      img: '../../../assets/champions/seigoyuri-akui.png',
      name: 'Yuri Akui Masago',
      age: 28,
      height: 1.63,
      title: 'WBA',
      victory: 19,
      knockout: 11,
      defeat: 2,
      draw: 1,
      wiki: 'https://en.wikipedia.org/wiki/Seigo_Yuri_Akui',
      boxrec: 'https://boxrec.com/en/box-pro/685429',
    },
    {
      boxer: 'Julio César Martínez',
      img: '../../../assets/champions/julio-cesar-martinez.webp',
      name: 'Julio Cesar Martinez Aguilar',
      age: 29,
      height: 1.57,
      title: 'WBC',
      victory: 20,
      knockout: 15,
      defeat: 3,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Julio_Cesar_Martinez',
      boxrec: 'https://boxrec.com/en/box-pro/751478',
    },
    {
      boxer: 'Jesse Rodriguez',
      img: '../../../assets/champions/jesse-rodriguez.png',
      name: 'Jesse James Rodríguez Franco',
      age: 24,
      height: 1.63,
      title: 'IBF-WBO',
      victory: 19,
      knockout: 12,
      defeat: 0,
      draw: 0,
      wiki: 'https://en.wikipedia.org/wiki/Jesse_Rodriguez_(boxer)',
      boxrec: 'https://boxrec.com/en/box-pro/791293',
    },
  ]
}
