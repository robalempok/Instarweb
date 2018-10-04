import { Component, Input } from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmFileUploadModalComponent } from '../confirm-file-upload-modal/confirm-file-upload-modal.component';
import { Store } from '@ngxs/store';
import { ToggleLoading } from '@app/core/state/app.state';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input() profilePictureLink: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() joined: Date;
  @Input() balance: number;
  @Input() rating: number;
  @Input() level: number;
  @Input() completedActivitiesCount: number;

  constructor(private userService: UserService, private modalService: NgbModal, private store: Store, private toastr: ToastrService) { }

  fileSelected(event) {
    const profilePicture: File = event.target.files[0];
    const confirmModal = this.modalService.open(ConfirmFileUploadModalComponent, {centered: true});
    confirmModal.componentInstance.fileName = profilePicture.name;
    confirmModal.componentInstance.confirmSubmit
    .subscribe(() => {
      this.store.dispatch(new ToggleLoading()).subscribe();
      const toastOptions: Partial<IndividualConfig> = { closeButton: true, progressBar: true, positionClass: 'toast-bottom-right'};
      this.userService.updateProfilePicture(profilePicture)
      .subscribe(
        _success => {
          this.toastr.success('Successfully updated profile picture', 'Instar Wallet', toastOptions);
          confirmModal.close();
          this.store.dispatch(new ToggleLoading()).subscribe(() => {
          });
        },
        _error => {
          this.toastr.error('There was an error uploading profile picture', 'Instar Wallet', toastOptions);
          confirmModal.close();
          this.store.dispatch(new ToggleLoading()).subscribe();
        }
      );
    });
  }
}
