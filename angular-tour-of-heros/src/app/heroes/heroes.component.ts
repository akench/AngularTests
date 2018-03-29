import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  //selector is like an ID
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero : Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  //this means that heroService is a private variable of HeroComponent
  //also signifies a HeroService injection site
  constructor(private heroService: HeroService) { }
  //constructor should be simple parameter initialization, no complex code, save it for ngOnInit

  
  ngOnInit() {
    this.getHeroes();
  }

}
