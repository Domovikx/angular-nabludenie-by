import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContactsComponent } from './page-contacts.component';
import { MapYandexModule } from 'src/app/modules/map-yandex/map-yandex.module';

@NgModule({
  imports: [CommonModule, MapYandexModule],
  declarations: [PageContactsComponent]
})
export class PageContactsModule {}
