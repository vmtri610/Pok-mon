import * as fromPokemon from '../actions/pokemon.action';
import { PokemonState } from '../states/pokemon.state';
import { createReducer, on } from '@ngrx/store';

export const initialState: PokemonState = {
  pokemonDetails: [],
  pokemon_species: [],
  loading: false,
  error: '',
};

export const pokemonReducer = createReducer(
  initialState,
  on(fromPokemon.getPokemons, (state, { type, page }) => {
    console.log(type);
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromPokemon.getPokemonsSuccess, (state, { type, pokemon_species }) => {
    console.log(type);
    return {
      ...state,
      pokemon_species,
      loading: false,
    };
  }),
  on(fromPokemon.getPokemonsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(fromPokemon.getPokemonDetail, (state, { type, name }) => {
    console.log(type);
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromPokemon.getPokemonDetailSuccess, (state, { type, pokemonDetails }) => {
    console.log(type);
    let newPokemonDetails = [...state.pokemonDetails, ...pokemonDetails];
    return {
      ...state,
      pokemonDetails: newPokemonDetails,
      loading: false,
    };
  }),
  on(fromPokemon.getPokemonDetailFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);
