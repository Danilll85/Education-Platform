import { Component } from '@angular/core';
import { CategoryCard } from '../../../../Interfaces/category-card';

@Component({
  selector: 'app-top-categories',
  standalone: false,
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css',
})
export class TopCategoriesComponent {
  topCategoriesCards: Array<CategoryCard> = [
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Art & Design',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Business',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Copy Writing',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Marketing',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Programming',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Photography',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Videography',
    },
    {
      path: './../../assets/CategoryCardPlaceholder.svg',
      category: 'Personal Development',
    },
  ];
}
