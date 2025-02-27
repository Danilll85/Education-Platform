import { Component } from '@angular/core';
import { NavbarModule } from '../../shared/Modules/Navbar/Navbar.module';
import { FooterModule } from '../../shared/Modules/Footer/Footer.module';
import { PromoModule } from '../../shared/Modules/Promo/Promo.module';
import { TrendingCoursesModule } from '../../shared/Modules/Trending-Courses/Trending-Courses.module';
import { TopCategoriesModule } from '../../shared/Modules/TopCategories/TopCategories.module';
import { BecomeMentorModule } from '../../shared/Modules/BecomeMentor/BecomeMentor.module';
import { LatestBlogModule } from '../../shared/Modules/LatestBlog/LatestBlog.module';
import { PartnersModule } from '../../shared/Modules/Partners/Partners.module';
import { FeedbackSliderModule } from '../../shared/Modules/Feedback-Slider/Feedback-Slider.module';
import { AdvantagesModule } from '../../shared/Modules/Advantages/Advantages.module';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarModule,
    PromoModule,
    TrendingCoursesModule,
    TopCategoriesModule,
    AdvantagesModule,
    BecomeMentorModule,
    FeedbackSliderModule,
    PartnersModule,
    LatestBlogModule,
    FooterModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
