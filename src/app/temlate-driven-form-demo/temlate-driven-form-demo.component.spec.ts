import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemlateDrivenFormDemoComponent } from './temlate-driven-form-demo.component';

describe('TemlateDrivenFormDemoComponent', () => {
  let component: TemlateDrivenFormDemoComponent;
  let fixture: ComponentFixture<TemlateDrivenFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemlateDrivenFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemlateDrivenFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
