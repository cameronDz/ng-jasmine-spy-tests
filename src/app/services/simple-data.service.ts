import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleDataService implements OnDestroy, OnInit {

  constructor() {}

  ngOnInit(): void {
    // TODO
  }

  ngOnDestroy(): void {
    // TODO
  }

  public getSmallListPayload(): Array<string> {
    return ['one', 'TWO', 'three', 'FOUR'];
  }

  public getSmallParagraphPayload(): string {
    return 'this is a small paragraph. it is not very long';
  }
}
