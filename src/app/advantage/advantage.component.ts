import { Component, Input } from '@angular/core';
import { PromoComponent } from '../promo/promo.component';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [PromoComponent],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.css',
})
export class AdvantageComponent {
  @Input() path: string = '';
  @Input() title: string = '';
}
