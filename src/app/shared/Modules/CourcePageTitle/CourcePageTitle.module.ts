import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcePageTitleComponent } from './components/cource-page-title/cource-page-title.component';
import { PathComponent } from './components/path/path.component';

@NgModule({
  imports: [CommonModule],
  exports: [CourcePageTitleComponent],
  declarations: [CourcePageTitleComponent, PathComponent],
})
export class CourcePageTitleModule {}
