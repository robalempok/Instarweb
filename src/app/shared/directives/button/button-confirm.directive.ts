import { Directive, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonConfirm]'
})
export class ButtonConfirmDirective implements OnInit {

  @HostBinding('class')
  elementClass = 'confirm-button';

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    const nativeElem = this.elem.nativeElement;
    nativeElem.innerHTML = `<i class="fa fa-check"></i><span>${nativeElem.innerHTML}</span>`;
  }

}
