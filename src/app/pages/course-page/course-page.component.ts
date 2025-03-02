import { Component } from '@angular/core';
import { NavbarModule } from '../../shared/Modules/Navbar/Navbar.module';
import { FooterModule } from '../../shared/Modules/Footer/Footer.module';
import { CourcePageTitleModule } from '../../shared/Modules/CourcePageTitle/CourcePageTitle.module';

@Component({
  selector: 'app-course-page',
  imports: [NavbarModule, FooterModule, CourcePageTitleModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css',
})
export class CoursePageComponent {}
