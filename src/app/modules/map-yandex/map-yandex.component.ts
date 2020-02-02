import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-yandex',
  templateUrl: './map-yandex.component.html',
  styleUrls: ['./map-yandex.component.scss']
})
export class MapYandexComponent implements OnInit {
  public clusterer = {
    preset: 'islands#invertedVioletClusterIcons',
    hasBaloon: false
  };

  public placemarkPropertiesVSTU = {
    hintContent: 'ВГТУ',
    balloonContent: 'Витебский Государственный Технологический Университет'
  };

  public placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref:
      'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconImageSize: [32, 32]
  };

  constructor() {}

  ngOnInit() {}
}
