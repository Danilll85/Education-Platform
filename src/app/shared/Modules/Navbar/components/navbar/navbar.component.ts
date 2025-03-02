import { Component, Output } from '@angular/core';
import { Category } from '../../../../Interfaces/category';
import { Router } from '@angular/router';

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
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedCategory: string = '';
  isCategoriesOpen: boolean = false;

  categories: Category[] = [
    { title: Categories.artAndDesign },
    { title: Categories.business },
    { title: Categories.programming },
  ];

  constructor(private router: Router) {}

  toggleCategories(): void {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.isCategoriesOpen = false;

    this.router.navigate(['/course-page'], {
      state: { category: category },
    });
  }

  hideDropdown() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }
}
