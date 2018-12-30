import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNationalComponent } from './home-national.component';

describe('HomeNationalComponent', () => {
  let component: HomeNationalComponent;
  let fixture: ComponentFixture<HomeNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
