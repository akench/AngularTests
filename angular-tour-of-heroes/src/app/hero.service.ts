import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  getHero(id: number): Observable<Hero> {

    this.messageService.add(`HeroService: fetched hero id=${id}`);
    //looks thru the HEROES dict, when the hero's id equals the id passed in, returns that hero
    return of(HEROES.find(hero => hero.id === id));
  }


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }

}
