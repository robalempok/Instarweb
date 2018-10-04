import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { WalletState, UpdateUserInfo, UpdateEmail } from '@app/pages/wallet/state/wallet.state';
import { Observable } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { ToggleLoading } from '@app/core/state/app.state';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Select(WalletState.userId) userId$: Observable<number>;
  @Select(WalletState.email) email$: Observable<string>;
  @Select(WalletState.names) names$: Observable<{firstName: string, lastName: string}>;
  @Select(WalletState.eosAccountName) eosAccountName$: Observable<string>;

  accountForm: FormGroup;
  updateEmailForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private toastService: ToastrService) { }

  // convenience getter for easy access to form fields
  get f(): any { return this.accountForm.controls; }

  ngOnInit(): void {
    this.names$.subscribe(names => {
      this.accountForm = this.fb.group({
        firstName: [names.firstName, [Validators.required]],
        lastName: [names.lastName, [Validators.required]]
      });
    });
    this.email$.subscribe(email => {
      this.updateEmailForm = this.fb.group({
        email : [email, [Validators.required, Validators.email]]
      });
    });
  }

  onSubmit() {
    const val = this.accountForm.value;
    const toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right'};
    this.store.dispatch(new ToggleLoading()).subscribe();
    this.store.dispatch(new UpdateUserInfo(val.firstName, val.lastName)).subscribe(
      _success => {
        this.toastService.success('Succesfully updated profile values', 'Instar Wallet', toastOptions);
        this.store.dispatch(new ToggleLoading()).subscribe();
      }
    );
  }

  updateEmailFormSubmit() {
    const val = this.updateEmailForm.value;
    const toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right'};
    this.store.dispatch(new ToggleLoading()).subscribe();
    this.store.dispatch(new UpdateEmail(val.email)).subscribe(
      _success => {
        this.toastService.success('Succesfully updated email', 'Instar Wallet', toastOptions);
        this.store.dispatch(new ToggleLoading()).subscribe();
      }
    );
  }

}
