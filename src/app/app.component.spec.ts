import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';
import { SimpleParagraphComponent } from './components/simple-paragraph/simple-paragraph.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SimpleListComponent,
        SimpleParagraphComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-jasmine-spy-tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-jasmine-spy-tests');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const text: any =
    expect(compiled.querySelector('.content').textContent).toContain('ng-jasmine-spy-tests');
  });
});
