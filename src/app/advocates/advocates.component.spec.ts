import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocatesComponent } from './advocates.component';

describe('AdvocatesComponent', () => {
  let component: AdvocatesComponent;
  let fixture: ComponentFixture<AdvocatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvocatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvocatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
