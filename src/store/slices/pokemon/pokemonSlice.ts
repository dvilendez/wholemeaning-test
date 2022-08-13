import { createSlice } from "@reduxjs/toolkit";
import { PokemonType } from '../../../types/pokemon.type'

interface PokemonState {
	isLoading: boolean;
	pokemons: PokemonType[];
	pokemonsWithDetail: PokemonType[];
	team: PokemonType[];
}

const initialState: PokemonState = {
	isLoading: true,
	pokemons: [],
	pokemonsWithDetail: [],
	team: [],
};

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		startLoadingPokemons: (state) => {
			state.isLoading = true
		},
		setPokemons: (state, action) => {
			state.pokemons = action.payload.map((data:any) => ({
				...data,
				hasDetailInfo: false
			}))
			state.isLoading = false
		},
		addPokemonWithDetail: (state, action) => {
			state.pokemonsWithDetail.push(action.payload)
		},
		addPokemonToTeam: (state, action) => {
			// validamos que tenga menos de 6 pokemones
			if (state.team.length >= 6) return
			// validamos que no exista en el equipo
			if (state.team.find(p => p.name === action.payload.name)) return
			// agregamos el poquemon al equipo
			state.team.push(action.payload)
		},
		removePokemonOfTeam: (state, action: any) => {
			// aqui eliminamos el pokemon validando por el nombre
			// filtrando la lista y retornando todos los que sean
			// distintos al nombre del pokemon que se quiere remover
			state.team = state.team.filter(pokemon => pokemon.name !== action.payload.name)
		},
	},
});

export const { 
	startLoadingPokemons,
	setPokemons,
	addPokemonWithDetail,
	addPokemonToTeam,
	removePokemonOfTeam
} = pokemonSlice.actions;
