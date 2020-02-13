import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCatalogComponent } from './page-catalog.component';
import { CatalogModule } from 'src/app/modules/catalog/catalog.module';

@NgModule({
  imports: [CommonModule, CatalogModule],
  declarations: [PageCatalogComponent]
})
export class PageCatalogModule {}
