import { createAction, props } from '@ngrx/store';
import { PokemonModel } from '../../models/pokemon.model';
import { PokemonDetailModel } from '../../models/pokemonDetail.model';

export const getPokemons = createAction(
  '[Pokemon] Get Pokemons',
  props<{ page: string }>(),
);
export const getPokemonsSuccess = createAction(
  '[Pokemon] Get Pokemons Success',
  props<{ pokemon_species: PokemonModel[] }>(),
);
export const getPokemonsFailure = createAction(
  '[Pokemon] Get Pokemons Failure',
  props<{ error: string }>(),
);

export const getPokemonDetail = createAction(
  '[Pokemon] Get Pokemon Detail',
  props<{ name: string }>(),
);
export const getPokemonDetailSuccess = createAction(
  '[Pokemon] Get Pokemon Detail Success',
  props<{ pokemonDetails: PokemonDetailModel[] }>(),
);
export const getPokemonDetailFailure = createAction(
  '[Pokemon] Get Pokemon Detail Failure',
  props<{ error: string }>(),
);
