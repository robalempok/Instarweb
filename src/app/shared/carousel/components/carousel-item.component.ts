import { Component, Renderer2, ViewChild, ContentChildren, QueryList, ElementRef, ChangeDetectorRef
} from '@angular/core';

import { SwiperDirective } from '../directives/swiper.directive';
import { LazyloadDirective } from '../directives/lazy-load.directive';

@Component({
    selector: 'app-carousel-item',
    template: `
        <div #carouselItem class="ui-carousel-item fade" [ngStyle]="transition" swiper tabindex="-1" style="outline: none">
        <ng-content></ng-content>
        </div>
   `,
    styles: [`
        :host{
            width: 100%;
        }
        .ui-carousel-item{
            user-select: none;
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -o-user-select: none;
            -ms-user-select: none;
        }
        .transition{
            transition: transform;
            -moz-transition: transform;
            -webkit-transition: transform;
            -o-transition: transform;
            -ms-transition: transform;
            transition-timing-function: ease;
            -moz-transition-timing-function: ease;
            -o-transition-timing-function: ease;
            -ms-transition-timing-function: ease;
        }
        .ui-carousel-item{
            height: 100%;
            width: 100%;
            position: absolute;
            overflow: hidden;
        }
        .fade{
            opacity: 1;
            -webkit-transition: opacity .5s ease-in;
               -moz-transition: opacity .5s ease-in;
                -ms-transition: opacity .5s ease-in;
                 -o-transition: opacity .5s ease-in;
                    transition: opacity .5s ease-in;
        }
        .fade-out{
            opacity: 0;
        }
    `]
})
export class CarouselItemComponent {
    static transitionStyle: any = {};

    @ViewChild('carouselItem') el: ElementRef;
    @ViewChild(SwiperDirective) swiper: SwiperDirective;
    @ContentChildren(LazyloadDirective) lazyLoadedImages: QueryList<LazyloadDirective>;
    speed: number;
    currentPosition = 0;
    position = 0;
    zIndex: number;
    constructor(
        private renderer: Renderer2,
        private ref: ChangeDetectorRef
    ) { }

    get transition() {
        return CarouselItemComponent.transitionStyle;
    }
    set transition(transitionStyle) {
        CarouselItemComponent.transitionStyle = transitionStyle;
    }

    moveTo(position: number) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', 'translate3d(' + position + 'px, 0px, 0px)');
    }

    moveBy(distance: number) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-o-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transform', 'translate3d(' + distance + 'px, 0px, 0px)');
    }

    setzIndex(zIndex: number) {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', zIndex);
    }

    disableTransition() {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-o-transition', 'none');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transition', 'none');
    }

    enableTransition() {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-o-transition', 'transform');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transition', 'transform');

        this.renderer.setStyle(this.el.nativeElement, 'transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-moz-transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-o-transition-duration', this.speed + 'ms');
        this.renderer.setStyle(this.el.nativeElement, '-ms-transition-duration', this.speed + 'ms');
    }

    fadeOut(duration: number) {
        return new Promise(resolve => {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
            setTimeout(() => {
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
                resolve();
            }, duration);
        });
    }

    fadeIn(duration: number) {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity ' + duration + 'ms');
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
        }, 0);
    }

    lazyLoad() {
        this.lazyLoadedImages
            .forEach((img) => {
                img.load();
            });
    }

}
