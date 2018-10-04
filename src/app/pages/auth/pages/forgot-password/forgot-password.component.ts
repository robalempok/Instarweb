import { Component } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  showSuccessMessage = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]]
  });

   // convenience getter for easy access to form fields
   get f(): any { return this.forgotPasswordForm.controls; }

   onSubmit() {
     const val = this.forgotPasswordForm.value;
     this.authService.resetPassword(val.email)
       .subscribe(
         () => this.showSuccessMessage = true,
         () => alert('Could not reset your password')
       );
   }

}
