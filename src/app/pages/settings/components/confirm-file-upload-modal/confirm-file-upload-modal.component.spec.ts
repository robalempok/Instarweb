import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFileUploadModalComponent } from './confirm-file-upload-modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ConfirmFileUploadModalComponent', () => {
  let component: ConfirmFileUploadModalComponent;
  let fixture: ComponentFixture<ConfirmFileUploadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmFileUploadModalComponent ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmFileUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
