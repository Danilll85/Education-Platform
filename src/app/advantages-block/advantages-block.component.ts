import { Component } from '@angular/core';
import { Advantage2Component } from '../advantage-2/advantage-2.component';
import { Advantage2 } from '../interfaces/advantage-2';

@Component({
    selector: 'app-advantages-block',
    imports: [Advantage2Component],
    templateUrl: './advantages-block.component.html',
    styleUrl: './advantages-block.component.css'
})
export class AdvantagesBlockComponent {
  advantages: Array<Advantage2> = [
    {
      path: './../../assets/video_library.svg',
      count: 10000,
      description: 'cources',
    },
    {
      path: './../../assets/people.svg',
      count: 50000,
      description: 'active students',
    },
    {
      path: './../../assets/mentor-icon.svg',
      count: 1000,
      description: 'active mentor',
    },
    {
      path: './../../assets/flag.svg',
      count: 180,
      description: 'countries',
    },
  ];
}
