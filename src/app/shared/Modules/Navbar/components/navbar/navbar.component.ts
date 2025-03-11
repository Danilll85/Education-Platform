import { Component, Injectable, Output, SimpleChanges } from '@angular/core';
import { Category } from '../../../../Interfaces/category';
import { Router, RouterLink } from '@angular/router';
import { NavigationService } from '../../../../Services/navigation.service';

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

export class NavbarComponent  {
  selectedCategory: string = '';
  isCategoriesOpen: boolean = false;
  currentUrl: string = '';

  categories: Category[] = [
    { title: Categories.artAndDesign },
    { title: Categories.business },
    { title: Categories.programming },
  ];

  constructor(
    private router: Router,
    private navigatorService: NavigationService
  ) {
    this.currentUrl = router.url;
  }

  logoTransition() {
    this.router.navigate(['/']);
  }

  toggleCategories(): void {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.isCategoriesOpen = false;

    this.navigatorService.setPath('/');
    this.navigatorService.setCurrentPage(category);

    this.navigatorService.getPath.subscribe((path) => {
      console.log(`path form getPath is ${path}`);
    });

    this.router.navigate(['/course-page']);
  }

  hideDropdown() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }
}
