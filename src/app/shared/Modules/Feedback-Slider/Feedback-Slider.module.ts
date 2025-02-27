import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackSliderComponent } from './components/feedback-slider/feedback-slider.component';

@NgModule({
  imports: [CommonModule],
  exports: [FeedbackSliderComponent],
  declarations: [FeedbackSliderComponent],
})
export class FeedbackSliderModule {}
