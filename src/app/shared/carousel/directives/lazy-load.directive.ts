import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[ui-lazy-load]' })
export class LazyloadDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('ui-lazy-load') uiLazyLoad: string;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) { }

    load() {
        const img = this.el.nativeElement;
        if (img.src) {
            return;
        }

        img.src = this.uiLazyLoad;
    }
}
