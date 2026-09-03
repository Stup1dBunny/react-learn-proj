import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { CardContainer, PageWrapper, ErrorWrapper } from "./CardsPage.styles";
import { SearchFilters } from "./SearchFilters/SearchFilters";
import { PaginationControls } from "./PaginationControls/PaginationControls";
import { PokemonCard } from "./PokemonCard/PokemonCard";
import { PokemonModal } from "./PokemonModal/PokemonModal";
import { SkeletonGrid } from "./SkeletonGrid/SkeletonGrid";
import { usePokemonFilter } from "../../hooks/usePokemonFilter";
import { Pokemon, PokemonListItem, PokemonType } from "../../types/Pokemon";
import { upperWord, formatTypes, getTypeColor } from "../../utils/pokemon";

export const CardsPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Для фильтриков
  const [searchNumber, setSearchNumber] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("");

  // Ловим покемонов
  const { data, isLoading, error } = useQuery<Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: async (): Promise<Pokemon[]> => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000"
      );

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = (await response.json()) as { results: PokemonListItem[] };

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: PokemonListItem) => {
          const res = await fetch(pokemon.url);
          if (!res.ok) {
            throw new Error(`Ошибка загрузки покемона: ${res.status}`);
          }
          return res.json() as Promise<Pokemon>;
        })
      );

      return pokemonDetails;
    },
    staleTime: 1000 * 60 * 5,
    retry: 3,
    retryDelay: (attemptIndex: number) => {
      return Math.min(1000 * 2 ** attemptIndex, 10000);
    },
  });

  const { filteredPokemons, totalCount } = usePokemonFilter(data || [], {
    searchNumber,
    searchName,
    searchType,
  });

  // Мемизируем
  const itemsPerPage = 20;
  const paginatedPokemons = useMemo(() => {
    return filteredPokemons.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [filteredPokemons, page]);

  // Сброс страницы при взаимодействии с поиском
  useEffect(() => {
    setPage(1);
  }, [searchNumber, searchName, searchType]);

  const handlePageChange = useCallback((_event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "number") setSearchNumber(value);
    if (name === "name") setSearchName(value);
    if (name === "type") setSearchType(value);
  }, []);

  const handleCardClick = useCallback((pokemon: Pokemon): void => {
    setSelectedPokemon(pokemon);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback((): void => {
    setOpenModal(false);
    setSelectedPokemon(null);
  }, []);

  // Обработчик ошибки
  if (error) {
    return (
      <>
        <SearchFilters
          searchNumber={searchNumber}
          searchName={searchName}
          searchType={searchType}
          onSearchChange={handleSearchChange}
        />
        <ErrorWrapper>
          <h2 className="error-title">Не удалось загрузить покемонов</h2>
          <p className="error-message">{error.message}</p>
        </ErrorWrapper>
      </>
    );
  }

  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);

  return (
    <PageWrapper>
      <SearchFilters
        searchNumber={searchNumber}
        searchName={searchName}
        searchType={searchType}
        onSearchChange={handleSearchChange}
      />

      <PaginationControls
        totalCount={totalCount}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />

      <CardContainer>
        {isLoading ? (
          <SkeletonGrid count={itemsPerPage} />
        ) : (
          paginatedPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onCardClick={handleCardClick}
              upperWord={upperWord}
              formatTypes={formatTypes}
            />
          ))
        )}
      </CardContainer>

      <PokemonModal
        open={openModal}
        pokemon={selectedPokemon}
        onClose={handleCloseModal}
        upperWord={upperWord}
        getTypeColor={getTypeColor}
      />
    </PageWrapper>
  );
};