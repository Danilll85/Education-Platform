import { Routes } from '@angular/router';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'course-page', component: CoursePageComponent },
];
