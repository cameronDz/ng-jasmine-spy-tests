import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleParagraphComponent } from './simple-paragraph.component';

describe('SimpleParagraphComponent', () => {
  let component: SimpleParagraphComponent;
  let fixture: ComponentFixture<SimpleParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
