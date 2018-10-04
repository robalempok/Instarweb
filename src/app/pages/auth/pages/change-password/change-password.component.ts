import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '@app/shared/validators/password.validator';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private authService: AuthService) { }

  changePasswordForm = this.fb.group({
    currentPassword: ['', [Validators.required]],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required],
  },
  {
    validator: [PasswordValidator.MatchPassword('password', 'passwordConfirm')]
  });

  // convenience getter for easy access to form fields
  get f(): any { return this.changePasswordForm.controls; }

  onSubmit() {
    const val = this.changePasswordForm.value;
    const toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right'};
    this.authService.changePassword(val.currentPassword, val.password, false)
      .subscribe(
        _success => {
          this.toastr.success('Password changed successfully!', 'Change Password', toastOptions);
          this.router.navigateByUrl('/app');
        },
        error => {
          this.toastr.error(error, 'Change Password', toastOptions);
        }
    );
  }
}
