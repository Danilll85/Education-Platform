import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [LatestBlogComponent],
  declarations: [LatestBlogComponent, BlogCardComponent],
})
export class LatestBlogModule {}
