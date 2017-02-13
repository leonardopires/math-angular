/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MjsLatexComponent } from './mjs-latex.component';

describe('MjsLatexComponent', () => {
  let component: MjsLatexComponent;
  let fixture: ComponentFixture<MjsLatexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjsLatexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjsLatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
