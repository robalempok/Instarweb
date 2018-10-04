import { PasswordToggleDirective } from '@app/shared/directives/input/password-toggle.directive';
import { ElementRef } from '@angular/core';

describe('PasswordToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordToggleDirective(new ElementRef(null), null);
    expect(directive).toBeTruthy();
  });
});
