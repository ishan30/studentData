import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAdComponent } from './department-ad.component';

describe('DepartmentAdComponent', () => {
  let component: DepartmentAdComponent;
  let fixture: ComponentFixture<DepartmentAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
