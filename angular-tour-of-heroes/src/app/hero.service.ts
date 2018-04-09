import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesURL = 'api/heroes';

  // getHero(id: number): Observable<Hero> {

  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   //looks thru the HEROES dict, when the hero's id equals the id passed in, returns that hero
  //   return of(HEROES.find(hero => hero.id === id));
  // }


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetching heroes...');
    return this.http.get<Hero[]>(this.heroesURL);
    // return of(HEROES);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

}
