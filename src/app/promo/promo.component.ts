import { Component } from '@angular/core';
import { SearchbarBtnComponent } from '../searchbar-btn/searchbar-btn.component';
import { Advantage } from '../interfaces/advantage';
import { AdvantageComponent } from '../advantage/advantage.component';

@Component({
    selector: 'app-promo',
    imports: [SearchbarBtnComponent, AdvantageComponent],
    templateUrl: './promo.component.html',
    styleUrl: './promo.component.css'
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
