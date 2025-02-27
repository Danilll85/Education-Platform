import { Component } from '@angular/core';
import { Advantage } from '../../../../Interfaces/advantage';

@Component({
  selector: 'app-promo',
  standalone: false,
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.css',
})
export class PromoComponent {
  advantages: Array<Advantage> = [
    {
      src: './../../assets/Alarm.svg',
      title: 'Life Time Acces',
    },
    {
      src: './../../assets/Smal User Icon.svg',
      title: 'Expert Mentor',
    },
    {
      src: './../../assets/Multimedia Icon.svg',
      title: '100K+ Courses',
    },
  ];
}
