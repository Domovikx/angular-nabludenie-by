import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './page-clients.component';
import { CustomersModule } from 'src/app/modules/customers/customers.module';

@NgModule({
  imports: [CommonModule, CustomersModule],
  declarations: [PageClientsComponent]
})
export class PageClientsModule {}
