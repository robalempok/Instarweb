import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './components/carousel-item.component';
import { DotsComponent } from './components/dots.component';
import { ArrowComponent } from './components/arrow.component';
import { SwiperDirective } from './directives/swiper.directive';
import { LazyloadDirective } from './directives/lazy-load.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    DotsComponent,
    ArrowComponent,
    SwiperDirective,
    LazyloadDirective
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent,
    LazyloadDirective
  ]
})
export class CarouselModule { }
