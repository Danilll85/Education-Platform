import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarBtnComponent } from './searchbar-btn.component';

describe('SearchbarBtnComponent', () => {
  let component: SearchbarBtnComponent;
  let fixture: ComponentFixture<SearchbarBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchbarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
