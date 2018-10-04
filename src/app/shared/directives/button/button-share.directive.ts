import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonShare]'
})
export class ButtonShareDirective implements OnInit {

  @HostBinding('class')
  elementClass = 'share-button';

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    const nativeElem = this.elem.nativeElement;
    nativeElem.innerHTML = `<i class="fa fa-share-alt"></i><span>${nativeElem.innerHTML}</span>`;
  }

}
