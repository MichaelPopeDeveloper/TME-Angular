import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvocatesComponent } from './home-advocates.component';

describe('HomeAdvocatesComponent', () => {
  let component: HomeAdvocatesComponent;
  let fixture: ComponentFixture<HomeAdvocatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdvocatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdvocatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
