import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListComponent } from './simple-list.component';
import { SimpleDataService } from 'src/app/services/simple-data.service';

describe('SimpleListComponent', () => {
  let component: SimpleListComponent;
  let fixture: ComponentFixture<SimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleListComponent ],
      providers: [ { provide: SimpleDataService, useClass: MockData }]
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
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.list-parent').textContent).toContain('CCC');
  });
});

class MockData {
  public getSmallListPayload(): Array<string> {
    return ['A', 'b', 'CCC'];
  }
}
