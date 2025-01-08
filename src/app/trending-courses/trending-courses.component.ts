import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Item } from '../interfaces/item';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-trending-courses',
  standalone: true,
  imports: [CardComponent, NgClass],
  templateUrl: './trending-courses.component.html',
  styleUrl: './trending-courses.component.css',
})
export class TrendingCoursesComponent implements OnChanges {
  activeBtn: number = 1;
  activeCategory: string = '';
  filteredCards: Array<Item> = [];
  cards: Array<Item> = [
    {
      category: 'Art & Design',
      title: 'UI/UX Design',
      description: 'Interpersonal skills - work better with others!',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 384,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Development',
      title: 'Web Developer',
      description: 'How to become an Expert Web Developer',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 735,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Art & Design',
      title: 'UX Research',
      description: 'User Experience Design Essentials',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 826,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Art & Design',
      title: '3D Design',
      description: 'Creating complex 3D Modelling in Blender',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 710,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Business',
      title: 'Public Speaking',
      description: 'Interpersonal skills - work better with others!',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 384,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Development',
      title: 'UI/UX Design',
      description: 'How to become an Expert Web Developer',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 758,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Development',
      title: '3D Design',
      description: 'Creating complex 3D Modelling in Blender',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 973,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
    {
      category: 'Marketing',
      title: 'UI/UX Design',
      description: 'Interpersonal skills - work better with others!',
      mentor: 'Company Training Center',
      rating: 5,
      ratingCount: 2078,
      price: 273,
      discount: 640,
      path: './../../assets/ImageCardPlaceholder.svg',
    },
  ];

  changeActiveBtn(btnNumber: number, event: MouseEvent) {
    this.activeCategory = (event.target as HTMLElement).innerText;
    console.log(this.activeCategory);

    this.activeBtn = btnNumber;

    this.filteredCards = this.cards.filter(
      (card) => card.category == this.activeCategory
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges Triggered');
  }
}

// Caching?
