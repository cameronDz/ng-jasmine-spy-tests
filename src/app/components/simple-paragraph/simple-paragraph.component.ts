import { Component, OnInit } from '@angular/core';
import { SimpleDataService } from '../../services/simple-data.service';

@Component({
  selector: 'app-simple-paragraph',
  templateUrl: './simple-paragraph.component.html',
  styleUrls: ['./simple-paragraph.component.css']
})
export class SimpleParagraphComponent implements OnInit {

  public stringPayload: string = '';

  constructor(private simpleDataService: SimpleDataService) {}

  ngOnInit() {
    this.stringPayload = this.simpleDataService.getSmallParagraphPayload();
  }

}
