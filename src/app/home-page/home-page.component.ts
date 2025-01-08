import { Component } from '@angular/core';
import { NavbarComponent } from './../navbar/navbar.component';
import { PromoComponent } from './../promo/promo.component';
import { TopCategoriesComponent } from './../top-categories/top-categories.component';
import { TrendingCoursesComponent } from './../trending-courses/trending-courses.component';
import { AdvantagesBlockComponent } from './../advantages-block/advantages-block.component';
import { BecomeMentorComponent } from './../become-mentor/become-mentor.component';
import { FeedbackSliderComponent } from './../feedback-slider/feedback-slider.component';
import { PartnersComponent } from './../partners/partners.component';
import { LatestBlogComponent } from './../latest-blog/latest-blog.component';
import { FooterComponent } from './../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
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
