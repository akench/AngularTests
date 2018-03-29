import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// gets the ngModel from forms
import { FormsModule } from '@angular/forms';  


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';


@NgModule({
  // Every component must be declared exactly once!!!
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  //providers array : create a single, shared instance of HeroService and inject it into any class that asks for it
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
