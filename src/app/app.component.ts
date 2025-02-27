import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from './shared/Modules/Navbar/Navbar.module';
import { FooterModule } from './shared/Modules/Footer/Footer.module';
import { PromoModule } from './shared/Modules/Promo/Promo.module';
import { TrendingCoursesModule } from './shared/Modules/Trending-Courses/Trending-Courses.module';
import { TopCategoriesModule } from './shared/Modules/TopCategories/TopCategories.module';
import { BecomeMentorModule } from './shared/Modules/BecomeMentor/BecomeMentor.module';
import { LatestBlogModule } from './shared/Modules/LatestBlog/LatestBlog.module';
import { PartnersModule } from './shared/Modules/Partners/Partners.module';
import { FeedbackSliderModule } from './shared/Modules/Feedback-Slider/Feedback-Slider.module';
import { AdvantagesModule } from './shared/Modules/Advantages/Advantages.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarModule,
    FooterModule,
    PromoModule,
    TrendingCoursesModule,
    TopCategoriesModule,
    BecomeMentorModule,
    LatestBlogModule,
    PartnersModule,
    FeedbackSliderModule,
    AdvantagesModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'education-platform-app';
}
