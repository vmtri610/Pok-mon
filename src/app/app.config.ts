import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { pokemonReducer } from '../ngrx/reducers/pokemon.reducer';
import { PokemonEffects } from '../ngrx/effects/pokemon.effect';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({ pokemon: pokemonReducer }),
    provideEffects(PokemonEffects),
    provideHttpClient(),
  ],
};
