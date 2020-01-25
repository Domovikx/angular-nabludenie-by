import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageArticlesComponent } from './page-articles.component';

import { NewsHowToChooseTheRightIpCameraComponent } from 'src/app/components/news-how-to-choose-the-right-ip-camera/news-how-to-choose-the-right-ip-camera.component';
import { NewsHowToChooseCCTVSystemForCottagesComponent } from 'src/app/components/news-how-to-choose-CCTV-system-for-cottages/news-how-to-choose-CCTV-system-for-cottages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PageArticlesComponent,
    NewsHowToChooseTheRightIpCameraComponent,
    NewsHowToChooseCCTVSystemForCottagesComponent
  ]
})
export class PageArticlesModule {}
