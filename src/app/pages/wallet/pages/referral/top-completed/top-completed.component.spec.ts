import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompletedComponent } from './top-completed.component';

describe('TopCompletedComponent', () => {
  let component: TopCompletedComponent;
  let fixture: ComponentFixture<TopCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
