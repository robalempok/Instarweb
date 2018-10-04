import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appButtonCancel]'
})
export class ButtonCancelDirective {

  @HostBinding('class')
  elementClass = 'cancel-button';

  constructor() { }

}
