import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageAboutModule } from './pages/page-about/page-about.module';
import { PageHomeModule } from './pages/page-home/page-home.module';
import { PageArticlesModule } from './pages/page-articles/page-articles.module';
import { PageBrandsModule } from './pages/page-brands/page-brands.module';
import { PageCatalogModule } from './pages/page-catalog/page-catalog.module';
import { PageClientsModule } from './pages/page-clients/page-clients.module';
import { PageContactsModule } from './pages/page-contacts/page-contacts.module';
import { PageSupportModule } from './pages/page-support/page-support.module';

import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    PageAboutModule,
    PageArticlesModule,
    PageBrandsModule,
    PageCatalogModule,
    PageClientsModule,
    PageContactsModule,
    PageHomeModule,
    PageSupportModule,

    FooterModule,
    HeaderModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
