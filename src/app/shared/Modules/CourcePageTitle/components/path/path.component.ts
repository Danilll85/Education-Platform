import { Component, OnInit, DoCheck, AfterViewInit, Injectable } from '@angular/core';
import { NavigationService } from '../../../../Services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path',
  standalone: false,
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css'],
})

export class PathComponent implements OnInit, AfterViewInit {
  path: string = '';
  courseTitle: string = '';

  constructor(
    private navigatorService: NavigationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log('ngOnInit works');
    
    this.navigatorService.getPath.subscribe((path) => {
      this.path = path;
      this.onPathUpdated();
    });
    
    this.navigatorService.getCurrentPage.subscribe((title) => {
      this.courseTitle = title;
      this.getCurrentPage();
    })    
  }

  ngAfterViewInit(): void {
    console.log(`current path is ${this.path} current courseTitle is ${this.courseTitle}`);
    
  }

  onPathUpdated() {
    if (this.path !== '') {
      localStorage.setItem('path', this.path);
    } else {
      this.path = localStorage.getItem('path') as string;
    }
  }

  getCurrentPage(){
    if (this.courseTitle !== '') {
      localStorage.setItem('page', this.courseTitle);
    } else {
      this.courseTitle = localStorage.getItem('page') as string;
    }
  }
}
