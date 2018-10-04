import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from '@app/core/state/auth.state';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { ToggleLoading } from '@app/core/state/app.state';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private route: ActivatedRoute) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  callback: string;

  // convenience getter for easy access to form fields
    get f(): any { return this.loginForm.controls; }


  ngOnInit(): void {
    this.route.queryParams
    .pipe(filter(params => params.callback))
    .subscribe(params => {
      this.callback = params.callback;
    });
  }

  onSubmit() {
    const val = this.loginForm.value;
    this.store.dispatch(new ToggleLoading());
    this.store.dispatch(new Login(val.email, val.password)).subscribe(
      _success => {
        this.store.dispatch(new ToggleLoading());
        this.router.navigateByUrl(this.callback || '/app');
      },
      error => {
        this.store.dispatch(new ToggleLoading());
        const toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right' };
        this.toastr.error(error, 'Sign Up', toastOptions);
      }
    );
  }
}
