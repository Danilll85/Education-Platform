import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: string[] = [];
  private historySubject = new BehaviorSubject<string[]>([]);
  history$ = this.historySubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.history.push(event.urlAfterRedirects);
        this.historySubject.next([...this.history]);
      });
  }

  getPreviousUrl(): string[] {
    return this.history;
  }
}
