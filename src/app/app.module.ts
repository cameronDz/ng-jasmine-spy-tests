import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';
import { SimpleParagraphComponent } from './components/simple-paragraph/simple-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleListComponent,
    SimpleParagraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
