import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsSmModule } from 'src/app/modules/brands-sm/brands-sm.module';
import { SliderSmModule } from 'src/app/modules/slider-sm/slider-sm.module';
import { AboutCompanyModule } from 'src/app/modules/about-company/about-company.module';

import { PageHomeComponent } from './page-home.component';
import { SecurityAndSafetySystemsModule } from 'src/app/modules/security-and-safety-systems/security-and-safety-systems.module';

@NgModule({
  imports: [
    CommonModule,
    BrandsSmModule,
    SliderSmModule,
    AboutCompanyModule,
    SecurityAndSafetySystemsModule
  ],
  declarations: [PageHomeComponent]
})
export class PageHomeModule {}
