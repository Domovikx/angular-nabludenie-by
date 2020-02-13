/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewsHowToChooseTheRightIpCameraComponent } from './news-how-to-choose-the-right-ip-camera.component';

describe('NewsHowToChooseTheRightIpCameraComponent', () => {
  let component: NewsHowToChooseTheRightIpCameraComponent;
  let fixture: ComponentFixture<NewsHowToChooseTheRightIpCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsHowToChooseTheRightIpCameraComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHowToChooseTheRightIpCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
