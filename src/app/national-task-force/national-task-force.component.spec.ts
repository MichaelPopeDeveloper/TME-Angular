import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTaskForceComponent } from './national-task-force.component';

describe('NationalTaskForceComponent', () => {
  let component: NationalTaskForceComponent;
  let fixture: ComponentFixture<NationalTaskForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalTaskForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalTaskForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
