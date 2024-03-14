import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blogs = [{
    id: 1,
    title: 'CAMPEONES',
    description: 'Los mejores Boxeadores de sus categorías.',
    img: '../../../../assets/carrousel/1.webp',
    link: '/champions',
  },
  {
    id: 2,
    title: 'pesaje',
    description: 'Averigua en que categoría te encuentras según tu peso.',
    img: '../../../../assets/carrousel/2.jpg',
    link: '/weighing',
  },
  {
    id: 3,
    title: 'DIETAS',
    description: 'Algunos tips de alimentos o bebidas que puedes consumir para rendir mejor...',
    img: '../../../../assets/carrousel/3.jpg',
    link: '/diet',
  },
  {
    id: 4,
    title: 'TOP 3',
    description: 'Los mejores Boxeadores de sus categorías.',
    img: '../../../../assets/carrousel/1.webp',
    link: '',
  },
  {
    id: 5,
    title: 'TOP 3',
    description: 'Los mejores Boxeadores de sus categorías.',
    img: '../../../../assets/carrousel/1.webp',
    link: '',
  },
  {
    id: 6,
    title: 'TOP 3',
    description: 'Los mejores Boxeadores de sus categorías.',
    img: '../../../../assets/carrousel/1.webp',
    link: '',
  },

]
}
