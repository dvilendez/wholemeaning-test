import axios from 'axios'
import { 
  startLoadingPokemons,
  setPokemons
 } from "./pokemonSlice"


 export const getPokemons = () => {
  return async (dispatch: any, getState: any) => {
    // para activar el estado de cargando
    dispatch(startLoadingPokemons())
    // obtenemos informacion de los pokemones
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=70')
    // asignamos los pokemones a nuestro store
    dispatch(setPokemons(data.results))
  }
}

export const getPokemonDetailInfo= (url: string) => {
  return async (dispatch: any, getState: any) => {
    // obtenemos informacion de los pokemones
    const { data } = await axios.get(url)
    // asignamos los pokemones a nuestro store
    dispatch(setPokemons(data.results))
  }
}