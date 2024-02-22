import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blogs = [{
    id: 1,
    title: 'TOP 3',
    description: 'Los mejores Boxeadores de sus categorías.',
    img: '../../../../assets/carrousel/1.webp',
    link: '',
  },
  {
    id: 2,
    title: 'TÉCNICAS',
    description: 'Aprende sobre las técnicas que se utilizan en el boxeo.',
    img: '../../../../assets/carrousel/2.jpg',
    link: '',
  },
  {
    id: 3,
    title: 'DIETAS',
    description: 'Algunos tips de alimentos o bebidas que puedes consumir para rendir mejor...',
    img: '../../../../assets/carrousel/3.jpg',
    link: '',
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
