import React from "react";
import { Pokemon, PokemonType } from "../../../types/Pokemon";
import { PokemonCardWrapper } from "../CardsPage.styles";

interface PokemonCardProps {
  pokemon: Pokemon;
  onCardClick: (pokemon: Pokemon) => void;
  upperWord: (str: string) => string;
  formatTypes: (types: PokemonType[]) => string;
}

export const PokemonCard = React.memo(({
  pokemon,
  onCardClick,
  upperWord,
  formatTypes,
}: PokemonCardProps) => {
  return (
    <PokemonCardWrapper onClick={() => onCardClick(pokemon)}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width="80"
        height="80"
      />
      <p className="pokemon-name">
        #{pokemon.id} - {upperWord(pokemon.name)}
      </p>
      <p className="pokemon-types">{formatTypes(pokemon.types)}</p>
    </PokemonCardWrapper>
  );
});

PokemonCard.displayName = "PokemonCard";