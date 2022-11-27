import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSeiteComponent } from './main-seite.component';

describe('MainSeiteComponent', () => {
  let component: MainSeiteComponent;
  let fixture: ComponentFixture<MainSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSeiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
