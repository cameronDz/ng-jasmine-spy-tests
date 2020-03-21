import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { SimpleParagraphComponent } from './simple-paragraph.component';
import { SimpleDataService } from '../../services/simple-data.service';

describe('SimpleParagraphComponent', () => {
  let component: SimpleParagraphComponent;
  let fixture: ComponentFixture<SimpleParagraphComponent>;

  const mockedPayload: string = 'mocked small response';
  const mockedService = {
    provide: SimpleDataService,
    useValue: {
      subcribeToSmallParagraphPayload: (self, successCallback) => {
        successCallback(self, mockedPayload);
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleParagraphComponent ],
      providers: [ mockedService ]
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

  it('should have mocked data', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('.paragraph-content').textContent).toContain(mockedPayload);
  });
});
