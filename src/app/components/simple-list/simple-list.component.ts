import { Component, OnInit } from '@angular/core';
import { SimpleDataService } from '../../services/simple-data.service';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {

  public stringPayload: Array<string> = [];

  constructor(private simpleDataService: SimpleDataService) {}

  ngOnInit() {
    this.stringPayload = this.simpleDataService.getSmallListPayload();
  }
}
