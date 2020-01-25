/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsHowToChooseCCTVSystemForCottagesComponent } from './news-how-to-choose-CCTV-system-for-cottages.component';

describe('NewsHowToChooseCCTVSystemForCottagesComponent', () => {
  let component: NewsHowToChooseCCTVSystemForCottagesComponent;
  let fixture: ComponentFixture<NewsHowToChooseCCTVSystemForCottagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsHowToChooseCCTVSystemForCottagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHowToChooseCCTVSystemForCottagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
