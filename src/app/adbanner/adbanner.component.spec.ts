import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdbannerComponent } from './adbanner.component';

describe('AdbannerComponent', () => {
  let component: AdbannerComponent;
  let fixture: ComponentFixture<AdbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
