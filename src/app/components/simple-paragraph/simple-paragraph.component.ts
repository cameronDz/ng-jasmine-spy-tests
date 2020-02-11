import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { SimpleDataService } from '../../services/simple-data.service';

@Component({
  selector: 'app-simple-paragraph',
  templateUrl: './simple-paragraph.component.html',
  styleUrls: ['./simple-paragraph.component.css']
})
export class SimpleParagraphComponent implements OnInit {

  public title = 'paragraph title';
  public stringPayload: string = '';
  private smallParagraphSubscription: Subscription;

  constructor(private simpleDataService: SimpleDataService) {}

  ngOnInit() {
    this.smallParagraphSubscription = this.simpleDataService.subcribeToSmallParagraphPayload(this, this.successfulSmallParagraphCallback);
  }

  ngOnDestroy(): void {
    if (!isNullOrUndefined(this.smallParagraphSubscription)) {
      this.smallParagraphSubscription.unsubscribe();
    }
  }

  public successfulSmallParagraphCallback(self: SimpleParagraphComponent, value: string): void {
    self.stringPayload = value;
  }
}
