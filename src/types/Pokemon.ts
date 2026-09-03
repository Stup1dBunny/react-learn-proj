export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  other?: {
    "official-artwork"?: {
      front_default?: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
  sprites: PokemonSprites;
}

export interface PokemonListItem {
  name: string;
  url: string;
}