import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputTextWindowComponent } from './input-output-text-window.component';

describe('InputOutputTextWindowComponent', () => {
  let component: InputOutputTextWindowComponent;
  let fixture: ComponentFixture<InputOutputTextWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputTextWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputTextWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
