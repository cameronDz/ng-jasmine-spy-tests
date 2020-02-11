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

  public getSmallDataPayload(): Array<string> {
    return ['one', 'TWO', 'three', 'FOUR'];
  }
}
