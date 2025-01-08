import { TitleCasePipe, Time } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCard } from '../interfaces/blog-card';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-latest-blog',
  standalone: true,
  imports: [BlogCardComponent, TitleCasePipe],
  templateUrl: './latest-blog.component.html',
  styleUrl: './latest-blog.component.css',
})
export class LatestBlogComponent {
  blogCards: Array<BlogCard> = [
    {
      path: './../../assets/BlogCardPlaceholder.svg',
      date: new Date('2021-05-03'),
      readingTime: { hours: 0, minutes: 3 },
      title: '10 graphic design trends to get you inspired in 2021',
      description:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.',
    },
    {
      path: './../../assets/BlogCardPlaceholder.svg',
      date: new Date('2021-05-03'),
      readingTime: { hours: 0, minutes: 3 },
      title: 'Right Triangle Trigonometry Explained',
      description:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.',
    },
    {
      path: './../../assets/BlogCardPlaceholder.svg',
      date: new Date('2021-05-03'),
      readingTime: { hours: 0, minutes: 3 },
      title: '2 Reasons Why You’re Confusing Chemistry ',
      description:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.',
    },
  ];
}
