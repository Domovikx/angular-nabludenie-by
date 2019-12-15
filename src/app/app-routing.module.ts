import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageCatalogComponent } from './pages/page-catalog/page-catalog.component';
import { PageSupportComponent } from './pages/page-support/page-support.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageArticlesComponent } from './pages/page-articles/page-articles.component';
import { PageBrandsComponent } from './pages/page-brands/page-brands.component';
import { PageContactsComponent } from './pages/page-contacts/page-contacts.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'catalog', component: PageCatalogComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'support', component: PageSupportComponent },
  { path: 'clients', component: PageClientsComponent },
  { path: 'articles', component: PageArticlesComponent },
  { path: 'brands', component: PageBrandsComponent },
  { path: 'contacts', component: PageContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
