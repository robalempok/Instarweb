import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidator } from '@app/shared/validators/password.validator';
import { Store } from '@ngxs/store';
import { SignUp } from '@app/core/state/auth.state';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { environment } from '@env/environment';

declare const branch: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  referrerUrl: string;
  captchaSuccess = false;

  recaptchaConfig = {
    size: 'normal',
    lang: 'en',
    theme: 'light',
    type: 'image',
  };

  registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      recaptcha: ['', Validators.required],
      acceptsTerms: ['', Validators.requiredTrue]
    },
    {
      validator: [PasswordValidator.MatchPassword('password', 'passwordConfirm')]
  });

  // convenience getter for easy access to form fields
  get f(): any { return this.registerForm.controls; }

  private toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right'};

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter(params => params._branch_match_id))
      .subscribe(params => {
        branch.init(
          environment.branchioKey,
          {
            branch_match_id: params._branch_match_id
          },
          (err, data) => {
            if (err) {
              this.toastr.error(err, 'Sign Up', this.toastOptions);
            } else {
              this.referrerUrl = data.data_parsed['~referring_link'];
              if (this.referrerUrl) {
                this.toastr.info('Successfully detected referrer url', 'Sign Up', this.toastOptions);
              }
            }
          }
        );
      });
  }

  handleCaptchaSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
  }

  handleCaptchaLoad(): void { }

  handleCaptchaExpire(): void { }

  onSubmit() {
    const val = this.registerForm.value;

    this.store.dispatch(new SignUp(val.firstName, val.lastName, val.email, val.password, this.referrerUrl)).subscribe(
      () => {},
      (error) => {
        this.toastr.error(error, 'Sign Up', this.toastOptions);
      },
      () => this.router.navigateByUrl('/app')
    );
  }
}
