import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEndingSpacingOptionsComponent } from './line-ending-spacing-options.component';

describe('LineEndingSpacingOptionsComponent', () => {
  let component: LineEndingSpacingOptionsComponent;
  let fixture: ComponentFixture<LineEndingSpacingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineEndingSpacingOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineEndingSpacingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
