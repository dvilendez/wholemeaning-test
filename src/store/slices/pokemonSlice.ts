import { createSlice } from "@reduxjs/toolkit";
import { PokemonType } from '../../types/pokemon.type'

interface PokemonState {
	pokemons: PokemonType[];
	readyForCombat: PokemonType[];
}

const initialState: PokemonState = {
	pokemons: [],
	readyForCombat: [],
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
	},
});

export const { } = pokemonSlice.actions;
