import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PromoComponent } from './promo/promo.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { TrendingCoursesComponent } from './trending-courses/trending-courses.component';
import { AdvantagesBlockComponent } from './advantages-block/advantages-block.component';
import { BecomeMentorComponent } from './become-mentor/become-mentor.component';
import { FeedbackSliderComponent } from './feedback-slider/feedback-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    PromoComponent,
    TrendingCoursesComponent,
    TopCategoriesComponent,
    AdvantagesBlockComponent,
    BecomeMentorComponent,
    FeedbackSliderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'education-platform-app';
}
