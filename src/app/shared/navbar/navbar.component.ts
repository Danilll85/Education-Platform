import { Component, Output } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { AuthorizationComponent } from '../authorization/authorization.component';
import { Category } from '../interfaces/category';
import { NgFor, NgIf } from '@angular/common';

enum Categories {
  artAndDesign = 'Art & Design',
  business = 'Business',
  copyWriting = 'Copy Writing',
  marketing = 'Marketing',
  programming = 'Programming',
  photography = 'Photography',
  videography = 'Videography',
  personalDev = 'Personal Development',
}

@Component({
  selector: 'app-navbar',
  imports: [SearchbarComponent, AuthorizationComponent, NgFor, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedCategory: string = '';
  isCategoriesOpen: boolean = false;

  categories: Category[] = [
    { title: Categories.artAndDesign },
    { title: Categories.business },
    { title: Categories.copyWriting },
  ];

  toggleCategories(): void {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.isCategoriesOpen = false; // Закрываем dropdown после выбора
  }
}
