import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'


//must provide the HeroService in the dependency injection system before Angular can inject into a heroes comp.
//Injectable decorator means the service might have injected dependencies into other things
@Injectable()
export class HeroService {

  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {

    //send message AFTER fetching the heroes
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }
  //inject MessageService into the HeroService, which is then injected into App component
  constructor(private messageService: MessageService) { }

}
