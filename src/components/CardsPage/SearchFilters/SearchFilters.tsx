import React from "react";
import { Input } from "@mui/material";
import { SearchHolder } from "../CardsPage.styles";

interface SearchFiltersProps {
  searchNumber: string;
  searchName: string;
  searchType: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchNumber,
  searchName,
  searchType,
  onSearchChange,
}) => {
  return (
    <SearchHolder>
      <Input
        name="number"
        placeholder="Номер"
        value={searchNumber}
        onChange={onSearchChange}
        sx={{ flex: 1, minWidth: "200px" }}
      />
      <Input
        name="name"
        placeholder="Имя"
        value={searchName}
        onChange={onSearchChange}
        sx={{ flex: 1, minWidth: "200px" }}
      />
      <Input
        name="type"
        placeholder="Тип"
        value={searchType}
        onChange={onSearchChange}
        sx={{ flex: 1, minWidth: "200px" }}
      />
    </SearchHolder>
  );
};