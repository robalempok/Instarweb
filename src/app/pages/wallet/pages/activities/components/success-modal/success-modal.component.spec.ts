import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalComponent } from './success-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('SuccessModalComponent', () => {
  let component: SuccessModalComponent;
  let fixture: ComponentFixture<SuccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessModalComponent ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
