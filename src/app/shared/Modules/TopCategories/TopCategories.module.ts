import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [TopCategoriesComponent],
  declarations: [TopCategoriesComponent, CategoryCardComponent],
})
export class TopCategoriesModule {}
