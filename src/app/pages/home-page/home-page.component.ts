import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { PromoComponent } from '../../shared/promo/promo.component';
import { TopCategoriesComponent } from '../../shared/top-categories/top-categories.component';
import { TrendingCoursesComponent } from '../../shared/trending-courses/trending-courses.component';
import { AdvantagesBlockComponent } from '../../shared/advantages-block/advantages-block.component';
import { BecomeMentorComponent } from '../../shared/become-mentor/become-mentor.component';
import { FeedbackSliderComponent } from '../../shared/feedback-slider/feedback-slider.component';
import { PartnersComponent } from '../../shared/partners/partners.component';
import { LatestBlogComponent } from '../../shared/latest-blog/latest-blog.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [
    NavbarComponent,
    PromoComponent,
    TrendingCoursesComponent,
    TopCategoriesComponent,
    AdvantagesBlockComponent,
    BecomeMentorComponent,
    FeedbackSliderComponent,
    PartnersComponent,
    LatestBlogComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
