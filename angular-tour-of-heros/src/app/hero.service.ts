import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


//must provide the HeroService in the dependency injection system before Angular can inject into a heroes comp.
//Injectable decorator means the service might have injected dependencies into other things
@Injectable()
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES;
  }

  constructor() { }

}
