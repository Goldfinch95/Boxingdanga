import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() champion!: Champion;
}

export interface Champion {
  img: string;
  name: string;
  age: number;
  height: number;
  title: string;
  victory: number;
  knockout: number;
  defeat: number;
  draw: number;
  wiki: string;
  boxrec: string;
}
