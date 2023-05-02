import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesWindowComponent } from './preferences-window.component';

describe('PreferencesWindowComponent', () => {
  let component: PreferencesWindowComponent;
  let fixture: ComponentFixture<PreferencesWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferencesWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
