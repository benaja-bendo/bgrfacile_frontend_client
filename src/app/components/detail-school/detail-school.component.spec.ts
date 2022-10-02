import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSchoolComponent } from './detail-school.component';

describe('DetailSchoolComponent', () => {
  let component: DetailSchoolComponent;
  let fixture: ComponentFixture<DetailSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
