import { Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'course-page', component: CoursePageComponent },
];
