import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesBlockComponent } from './advantages-block.component';

describe('AdvantagesBlockComponent', () => {
  let component: AdvantagesBlockComponent;
  let fixture: ComponentFixture<AdvantagesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvantagesBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvantagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
