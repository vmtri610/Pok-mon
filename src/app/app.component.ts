import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Store } from '@ngrx/store';
import { PokemonState } from '../ngrx/states/pokemon.state';
import * as pokemonActions from '../ngrx/actions/pokemon.action';
import { AsyncPipe, NgClass, NgForOf, NgStyle } from '@angular/common';
import { PokemonDetailModel } from '../models/pokemonDetail.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, AsyncPipe, NgForOf, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  typePoke: any[] = [
    { name: 'bug', color: '#26de81' },
    { name: 'dragon', color: '#ffeaa7' },
    { name: 'electric', color: '#fed330' },
    { name: 'fairy', color: '#FF0069' },
    { name: 'fighting', color: '#30336b' },
    { name: 'fire', color: '#f0932b' },
    { name: 'flying', color: '#81ecec' },
    { name: 'grass', color: '#00b894' },
    { name: 'ground', color: '#EFB549' },
    { name: 'ghost', color: '#a55eea' },
    { name: 'ice', color: '#74b9ff' },
    { name: 'normal', color: '#95afc0' },
    { name: 'poison', color: '#6c5ce7' },
    { name: 'psychic', color: '#a29bfe' },
    { name: 'rock', color: '#2d3436' },
    { name: 'water', color: '#0190FF' },
  ];

  title = 'poke';
  pokemon$ = this.store.select((state) => state.pokemon.pokemon_species);
  pokemonDetails$ = this.store.select((state) => state.pokemon.pokemonDetails);

  Pokemon: PokemonDetailModel = {
    name: '',
    order: 0,
    height: 0,
    weight: 0,
    sprites: {
      other: {
        dream_world: {
          front_default: '',
        },
      },
    },
    stats: [
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
    ],
    types: [
      {
        type: {
          name: '',
        },
      },
      {
        type: {
          name: '',
        },
      },
    ],
  };

  constructor(private store: Store<{ pokemon: PokemonState }>) {}

  ngOnInit(): void {
    this.store.dispatch(pokemonActions.getPokemons({ page: 'i' }));

    this.pokemon$.subscribe((data) =>
      data.forEach((element) => {
        this.store.dispatch(
          pokemonActions.getPokemonDetail({ name: element.name }),
        );
        console.log(this.pokemonDetails$);
      }),
    );
  }

  isActive: boolean = false;

  toggleActive(pokemon: PokemonDetailModel) {
    this.isActive = !this.isActive;
    this.Pokemon = pokemon;
  }

  toggleClose() {
    this.isActive = !this.isActive;
  }
}
