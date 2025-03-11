import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes';
import { NavigationService } from './shared/Services/navigation.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), NavigationService],
};
