import { Directive, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonTransfer]'
})
export class ButtonTransferDirective implements OnInit {

  @HostBinding('class')
  elementClass = 'transfer-button';

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    const nativeElem = this.elem.nativeElement;
    nativeElem.innerHTML = `<i class="fa fa-exchange"></i><span>${nativeElem.innerHTML}</span>`;
  }
}
