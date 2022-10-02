import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEcoleComponent } from './card-ecole.component';

describe('CardEcoleComponent', () => {
  let component: CardEcoleComponent;
  let fixture: ComponentFixture<CardEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEcoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
