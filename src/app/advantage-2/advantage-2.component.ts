import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { MyNumberPipe } from './../pipes/my-number.pipe';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantage-2',
  standalone: true,
  imports: [DecimalPipe, TitleCasePipe, MyNumberPipe],
  templateUrl: './advantage-2.component.html',
  styleUrl: './advantage-2.component.css',
})
export class Advantage2Component {
  @Input() path: string = '';
  @Input() count: number = 0;
  @Input() description: string = '';
}
