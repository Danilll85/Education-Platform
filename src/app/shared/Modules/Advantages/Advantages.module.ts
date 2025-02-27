import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantagesBlockComponent } from './components/advantages-block/advantages-block.component';
import { SharedModule } from '../Shared/Shared.module';
import { Advantage2Component } from './components/advantage-2/advantage-2.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [AdvantagesBlockComponent],
  declarations: [AdvantagesBlockComponent, Advantage2Component],
})
export class AdvantagesModule {}
