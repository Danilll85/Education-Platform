import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private path = new BehaviorSubject<string>('');
  private currentPage = new BehaviorSubject<string>('');
  getPath = this.path.asObservable();
  getCurrentPage = this.currentPage.asObservable();

  constructor() {}


  setPath(path: string) {
    console.log(`set path is ${path}`);
    
    this.path.next(path);
  }

  setCurrentPage(page: string) {
    console.log(`set page is ${page}`);
    
    this.currentPage.next(page);
  }
}
