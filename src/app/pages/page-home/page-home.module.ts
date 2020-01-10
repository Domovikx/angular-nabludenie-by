import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { BrandsSmModule } from 'src/app/modules/brands-sm/brands-sm.module';
import { SliderSmModule } from 'src/app/modules/slider-sm/slider-sm.module';

@NgModule({
  imports: [CommonModule, BrandsSmModule, SliderSmModule],
  declarations: [PageHomeComponent]
})
export class PageHomeModule {}
