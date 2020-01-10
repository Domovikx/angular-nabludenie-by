import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBrandsComponent } from './page-brands.component';
import { BrandsSmModule } from 'src/app/modules/brands-sm/brands-sm.module';

@NgModule({
  imports: [CommonModule, BrandsSmModule],
  declarations: [PageBrandsComponent]
})
export class PageBrandsModule {}
