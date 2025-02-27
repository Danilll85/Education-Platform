import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './Shared.component';
import { MyNumberPipe } from '../../Pipes/my-number.pipe';

@NgModule({
  imports: [CommonModule, MyNumberPipe],
  exports: [MyNumberPipe],
})
export class SharedModule {}
