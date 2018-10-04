import { ButtonConfirmDirective } from '@app/shared/directives/button/button-confirm.directive';
import { ElementRef } from '@angular/core';

describe('ButtonSuccessDirective', () => {
  it('should create an instance', () => {
    const directive = new ButtonConfirmDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
