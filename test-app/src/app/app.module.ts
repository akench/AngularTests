import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: string = '';

  constructor() {
    this.name = 'Hello World'
  }

  ngOnInit() {
    this.name = 'Hello World'
  }
}
