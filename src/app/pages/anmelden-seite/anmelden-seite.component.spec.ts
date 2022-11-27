import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldenSeiteComponent } from './anmelden-seite.component';

describe('AnmeldenSeiteComponent', () => {
  let component: AnmeldenSeiteComponent;
  let fixture: ComponentFixture<AnmeldenSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmeldenSeiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnmeldenSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
