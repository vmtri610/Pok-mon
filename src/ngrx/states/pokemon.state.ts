import { PokemonModel } from '../../models/pokemon.model';
import { PokemonDetailModel } from '../../models/pokemonDetail.model';

export interface PokemonState {
  pokemon_species: PokemonModel[];
  pokemonDetails: PokemonDetailModel[];
  loading: boolean;
  error: string;
}
