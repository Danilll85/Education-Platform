import { Component, OnInit, DoCheck } from '@angular/core';
import { NavigationService } from '../../../../Services/navigation.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-path',
  standalone: false,
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
  providers: [NavigationService],
})
export class PathComponent implements OnInit {
  path: string = '';
  courseTitle: String = '';

  constructor(
    private navigatorService: NavigationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.navigatorService.getPath.subscribe((path) => {
      this.path = path;
      this.onPathUpdated();
      this.cdr.detectChanges();
    });
    
    this.navigatorService.getCurrentPage.subscribe((title) => {
      this.courseTitle = title;
      this.getCurrentPage();
    })
  }

  onPathUpdated() {
    console.log(`hook works: ${this.path}`);
  }

  getCurrentPage(){
    console.log(`current page is ${this.courseTitle}`);
  }
}
