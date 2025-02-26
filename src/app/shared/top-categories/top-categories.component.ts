import { Component } from '@angular/core';
import { CategoryCard } from '../interfaces/category-card';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-top-categories',
  imports: [CategoryCardComponent],
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
