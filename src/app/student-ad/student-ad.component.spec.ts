import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdComponent } from './student-ad.component';

describe('StudentAdComponent', () => {
  let component: StudentAdComponent;
  let fixture: ComponentFixture<StudentAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
