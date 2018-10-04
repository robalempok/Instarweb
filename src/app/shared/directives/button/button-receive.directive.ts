import { Directive, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonReceive]'
})
export class ButtonReceiveDirective implements OnInit {

  @HostBinding('class')
  elementClass = 'receive-button';

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    const nativeElem = this.elem.nativeElement;
    nativeElem.innerHTML = `<i class="fa fa-download"></i><span>${nativeElem.innerHTML}</span>`;
  }
}
