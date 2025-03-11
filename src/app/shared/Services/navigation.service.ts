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
    this.path.next(path);
  }

  setCurrentPage(page: string) {    
    this.currentPage.next(page);
  }
}

