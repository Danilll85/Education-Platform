import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common';
import { TrendingCoursesComponent } from './components/trending-courses/trending-courses.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, TitleCasePipe, CurrencyPipe],
  exports: [TrendingCoursesComponent],
  declarations: [TrendingCoursesComponent, CardComponent],
})
export class TrendingCoursesModule {}
