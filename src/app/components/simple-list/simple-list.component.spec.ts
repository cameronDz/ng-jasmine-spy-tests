import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleListComponent } from './simple-list.component';
import { SimpleDataService } from '../../services/simple-data.service';

describe('SimpleListComponent', () => {
  let component: SimpleListComponent;
  let fixture: ComponentFixture<SimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleListComponent ],
      providers: [ { provide: SimpleDataService, useClass: MockDataService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mocked data ABC and NOT 123', () => {
    const fixture = TestBed.createComponent(SimpleListComponent);
    fixture.detectChanges();
    const compiledText = fixture.debugElement.nativeElement.querySelector('.list-parent').textContent;
    expect(compiledText).toContain('AAAAAa');
    expect(compiledText).toContain('CCC');
  });
});

class MockDataService {
  public getSmallListPayload(): Array<string> {
    return ['AAAAAa', 'b', 'CCC'];
  }
}
