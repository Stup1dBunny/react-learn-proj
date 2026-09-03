import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Pokemon, PokemonType } from "../../../types/Pokemon";

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90%",
  maxHeight: "90vh",
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface PokemonModalProps {
  open: boolean;
  pokemon: Pokemon | null;
  onClose: () => void;
  upperWord: (str: string) => string;
  getTypeColor: (type: string) => string;
}

export const PokemonModal = React.memo(({
  open,
  pokemon,
  onClose,
  upperWord,
  getTypeColor,
}: PokemonModalProps) => {
  if (!pokemon) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="pokemon-modal-title"
      aria-describedby="pokemon-modal-description"
    >
      <Box sx={modalStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 id="pokemon-modal-title">
            #{pokemon.id} - {upperWord(pokemon.name)}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={
              pokemon.sprites.other?.["official-artwork"]?.front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            width="200"
            height="200"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h3>Типы:</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {pokemon.types.map((typeObj: PokemonType, index: number) => (
              <span
                key={index}
                style={{
                  backgroundColor: getTypeColor(typeObj.type.name),
                  padding: "5px 15px",
                  borderRadius: "20px",
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {upperWord(typeObj.type.name)}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h3>Характеристики:</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            <div>
              <strong>Рост:</strong> {pokemon.height / 10} м
            </div>
            <div>
              <strong>Вес:</strong> {pokemon.weight / 10} кг
            </div>
          </div>
        </div>

        <div>
          <h3>Базовые характеристики:</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            <div>
              <strong>HP:</strong> {pokemon.stats[0]?.base_stat}
            </div>
            <div>
              <strong>Атака:</strong> {pokemon.stats[1]?.base_stat}
            </div>
            <div>
              <strong>Защита:</strong> {pokemon.stats[2]?.base_stat}
            </div>
            <div>
              <strong>Спец. Атака:</strong> {pokemon.stats[3]?.base_stat}
            </div>
            <div>
              <strong>Спец. Защита:</strong> {pokemon.stats[4]?.base_stat}
            </div>
            <div>
              <strong>Скорость:</strong> {pokemon.stats[5]?.base_stat}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
});

PokemonModal.displayName = "PokemonModal";