import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleDataService implements OnDestroy, OnInit {

  private smallListPayload = ['one', 'TWO', 'three', 'FOUR'];
  private smallListBehaviourSubject = new BehaviorSubject(this.smallListPayload);

  private smallParagraphPayload = 'this is a small paragraph. it is not very long';
  private smallParagraphBehaviourSubject = new BehaviorSubject(this.smallParagraphPayload);

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public getSmallListPayload(): Array<string> {
    return this.smallListPayload;
  }

  public getSmallParagraphPayload(): string {
    return this.smallParagraphPayload;
  }

  public subcribeToSmallListPayload(self: any, successCallback): Subscription
  {
    return this.smallListBehaviourSubject.subscribe();
  }

  public subcribeToSmallParagraphPayload(self: any, successCallback): Subscription
  {
    return this.smallParagraphBehaviourSubject.subscribe();
  }
}
