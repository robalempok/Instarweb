import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycComponent } from './kyc.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('KycComponent', () => {
  let component: KycComponent;
  let fixture: ComponentFixture<KycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
