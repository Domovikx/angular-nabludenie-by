import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MapYandexComponent } from './map-yandex.component';

@NgModule({
  imports: [CommonModule, AngularYandexMapsModule.forRoot('7f51d984-8723-4f7a-83a0-14ef48da9470')],
  declarations: [MapYandexComponent],
  exports: [MapYandexComponent]
})
export class MapYandexModule {}
