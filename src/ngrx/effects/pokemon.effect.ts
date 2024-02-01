import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '../../services/pokemon.service';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import * as PokemonActions from '../actions/pokemon.action';

@Injectable()
export class PokemonEffects {
  constructor(
    private action$: Actions,
    private pokemonService: PokemonService,
  ) {}

  getPokemon$ = createEffect(() =>
    this.action$.pipe(
      ofType(PokemonActions.getPokemons),
      switchMap((action) =>
        this.pokemonService.getPokemon(action.page).pipe(
          map((pokemon_species: any) =>
            PokemonActions.getPokemonsSuccess({
              pokemon_species: pokemon_species.pokemon_species,
            }),
          ),
          catchError((error) =>
            of(PokemonActions.getPokemonsFailure({ error })),
          ),
        ),
      ),
    ),
  );

  getPokemonDetail$ = createEffect(() =>
    this.action$.pipe(
      ofType(PokemonActions.getPokemonDetail),
      mergeMap((action) =>
        this.pokemonService.getPokemonDetail(action.name).pipe(
          map((pokemonDetails: any) =>
            PokemonActions.getPokemonDetailSuccess({
              pokemonDetails: [pokemonDetails],
            }),
          ),
          catchError((error) =>
            of(PokemonActions.getPokemonDetailFailure({ error })),
          ),
        ),
      ),
    ),
  );
}
