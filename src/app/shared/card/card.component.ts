import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [TitleCasePipe, CurrencyPipe],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() category: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() mentor: string = '';
  @Input() rating: number = 0;
  @Input() ratingCount: number = 0;
  @Input() price: number = 0;
  @Input() discount: number = 0;
  @Input() path: string = '';
}
