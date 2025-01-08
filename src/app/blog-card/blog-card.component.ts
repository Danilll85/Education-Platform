import { Time, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-card',
    imports: [TitleCasePipe],
    templateUrl: './blog-card.component.html',
    styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() path: string = '';
  @Input() date: Date = new Date();
  @Input() readingTime: Time = { hours: 0, minutes: 0 };
  @Input() title: string = '';
  @Input() description: string = '';
}
