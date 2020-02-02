import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapYandexModule } from 'src/app/modules/map-yandex/map-yandex.module';
import { PageContactsComponent } from './page-contacts.component';
import { ContactDataComponent } from './contact-data/contact-data.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  imports: [CommonModule, MapYandexModule, FormsModule, ReactiveFormsModule],
  declarations: [PageContactsComponent, ContactDataComponent, QuestionFormComponent]
})
export class PageContactsModule {}
