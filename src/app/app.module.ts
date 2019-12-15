import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { PageAboutModule } from './pages/page-about/page-about.module';
import { PageHomeModule } from './pages/page-home/page-home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    PageAboutModule,
    PageHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
