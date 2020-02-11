import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleDataService implements OnDestroy, OnInit {

  private smallListPayload = ['one', 'TWO', 'three', 'FOUR'];
  private smallParagraphPayload = 'this is a small paragraph. it is not very long';
  private smallParagraphBehaviourSubject = new BehaviorSubject(this.smallParagraphPayload);

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  /** get a variable simple */
  public getSmallListPayload(): Array<string> {
    return this.smallListPayload;
  }

  /**
   * get a subscription that returns a variable
   * @param self component calling
   * @param successCallback success callback
   */
  public subcribeToSmallParagraphPayload(self: any, successCallback): Subscription {
    return this.smallParagraphBehaviourSubject.asObservable().subscribe(() => {
      successCallback(self, this.smallParagraphPayload);
    });
  }
}
