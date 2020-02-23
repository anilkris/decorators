import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  hero: Hero;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  this.hero = {
      id: 1,
      name: 'ABCD'
    };

  this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

  }
}
