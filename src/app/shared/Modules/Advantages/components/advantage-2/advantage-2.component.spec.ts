import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advantage2Component } from './advantage-2.component';

describe('Advantage2Component', () => {
  let component: Advantage2Component;
  let fixture: ComponentFixture<Advantage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advantage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Advantage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
