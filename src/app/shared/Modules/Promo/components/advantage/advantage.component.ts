import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantage',
  standalone: false,
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.css',
})
export class AdvantageComponent {
  @Input() path: string = '';
  @Input() title: string = '';
}
