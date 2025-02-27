import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './components/promo/promo.component';
import { SearchbarBtnComponent } from './components/searchbar-btn/searchbar-btn.component';
import { AdvantageComponent } from './components/advantage/advantage.component';

@NgModule({
  imports: [CommonModule],
  exports: [PromoComponent],
  declarations: [PromoComponent, SearchbarBtnComponent, AdvantageComponent],
})
export class PromoModule {}
