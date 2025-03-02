import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../Services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path',
  standalone: false,
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
  providers: [NavigationService],
})
export class PathComponent {
  previousUrl: string[];
  category: string | null = '';

  constructor(
    private navigatorService: NavigationService,
    private router: Router
  ) {
    const navigaton = this.router.getCurrentNavigation();
    console.log(navigaton);

    this.previousUrl = navigatorService.getPreviousUrl();

    console.log(this.previousUrl);
  }
}
