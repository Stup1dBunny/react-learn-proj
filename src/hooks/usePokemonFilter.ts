import { useMemo } from "react";
import { Pokemon } from "../types/Pokemon";

interface FilterParams {
  searchNumber: string;
  searchName: string;
  searchType: string;
}

export const usePokemonFilter = (
  allPokemons: Pokemon[],
  { searchNumber, searchName, searchType }: FilterParams
) => {
  // Убираем useState и useEffect - используем только useMemo
  const filteredPokemons = useMemo(() => {
    if (allPokemons.length === 0) return [];

    return allPokemons.filter((pokemon) => {
      const matchesNumber =
        searchNumber === "" ||
        pokemon.id.toString().includes(searchNumber);

      const matchesName =
        searchName === "" ||
        pokemon.name.toLowerCase().includes(searchName.toLowerCase());

      const matchesType =
        searchType === "" ||
        pokemon.types.some((typeObj) =>
          typeObj.type.name
            .toLowerCase()
            .includes(searchType.toLowerCase())
        );

      return matchesNumber && matchesName && matchesType;
    });
  }, [allPokemons, searchNumber, searchName, searchType]);

  return {
    filteredPokemons,
    totalCount: filteredPokemons.length,
  };
};