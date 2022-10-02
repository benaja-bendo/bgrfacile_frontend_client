import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBaseComponent } from './school-base.component';

describe('SchoolBaseComponent', () => {
  let component: SchoolBaseComponent;
  let fixture: ComponentFixture<SchoolBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
