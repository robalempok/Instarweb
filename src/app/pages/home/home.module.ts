import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '@app/pages/home/home-routing.module';
import { HomeComponent } from '@app/pages/home/home.component';
import { FooterComponent } from '@app/pages/home/components/footer/footer.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [ HomeComponent, FooterComponent ]
})
export class HomeModule { }
