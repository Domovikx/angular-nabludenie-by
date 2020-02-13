import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from './page-about.component';
import { AboutCompanyModule } from 'src/app/modules/about-company/about-company.module';
import { SecurityAndSafetySystemsModule } from 'src/app/modules/security-and-safety-systems/security-and-safety-systems.module';

@NgModule({
  imports: [CommonModule, AboutCompanyModule, SecurityAndSafetySystemsModule],
  declarations: [PageAboutComponent]
})
export class PageAboutModule {}
