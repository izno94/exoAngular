import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalComponent } from './imc-cal.component';

describe('ImcCalComponent', () => {
  let component: ImcCalComponent;
  let fixture: ComponentFixture<ImcCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
