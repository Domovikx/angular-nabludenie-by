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

import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
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
    PageSupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
