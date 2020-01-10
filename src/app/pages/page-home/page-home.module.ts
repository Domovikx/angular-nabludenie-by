import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { SliderSmComponent } from 'src/app/modules/slider-sm/slider-sm.component';
import { BrandsSmComponent } from 'src/app/modules/brands-sm/brands-sm.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageHomeComponent, SliderSmComponent, BrandsSmComponent]
})
export class PageHomeModule {}
