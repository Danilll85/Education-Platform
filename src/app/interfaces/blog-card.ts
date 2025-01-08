import { Time } from '@angular/common';

export interface BlogCard {
  path: string;
  date: Date;
  readingTime: Time;
  title: string;
  description: string;
}
