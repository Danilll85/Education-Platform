import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes';
import { CoursePageComponent } from './course-page/course-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'course-page', component: CoursePageComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
