import { Component, Output, SimpleChanges } from '@angular/core';
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
  providers: [NavigationService],
})
export class NavbarComponent {
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
    this.router.navigate(['/course-page']);
  }

  sendPath() {
    this.navigatorService.setPath('/');
  }

  sendCurrentPage(category: Category) {
    console.log(`send category: ${category.title}`);
    
    this.navigatorService.setCurrentPage(category.title);
  }

  hideDropdown() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }
}
