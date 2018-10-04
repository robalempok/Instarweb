import { Directive, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonExport]'
})
export class ButtonExportDirective implements OnInit {

  @HostBinding('class')
  elementClass = 'export-button';

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    const nativeElem = this.elem.nativeElement;
    nativeElem.innerHTML = `<img src="assets/images/wallet/export.svg"><span>${nativeElem.innerHTML}</span>`;
  }
}
