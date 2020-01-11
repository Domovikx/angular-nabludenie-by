import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutCompanyComponent],
  exports: [AboutCompanyComponent]
})
export class AboutCompanyModule {}
