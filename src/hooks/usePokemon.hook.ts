import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from './store.hook';
import {
  addPokemonWithDetail,
  addPokemonToTeam,
  removePokemonOfTeam,
} from '../store/slices/pokemon';

interface UsePokemonProps {
  name: string,
  id: number,
  url: string
}

export const usePokemon = ({name = '', id = 0, url = ''}: UsePokemonProps) => {

  const { pokemonsWithDetail } = useAppSelector( (state) => state.pokemon)
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [pokemonInfo, setPokemonInfo]: [any, any] = useState({})

  const lookupPokemon = () => {
    if (name) {
      return pokemonsWithDetail.find(p => p.name === name)
    } else if (id) {
      return pokemonsWithDetail.find(p => p.id === id)
    }
  }

  const getPokemonInfo = async () => {
    let hasPokemon = lookupPokemon()
    setIsLoading(true)
    //validamos si el pokemon no existe
    if (!hasPokemon) {
      // obtenemos su informacion
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      // lo guardamos en un listado de pokemones y sus detalles
      // para ahorrarnos peticiones mas adelante
      dispatch(addPokemonWithDetail(data))
      // actualizamos el estado del componente local
      setPokemonInfo(data)
    } else {
    // si existe entonces lo cargamos sin realizar un request
      setPokemonInfo(hasPokemon)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getPokemonInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddPokemon = (e: any) => {
    dispatch(addPokemonToTeam(pokemonInfo))
    e.stopPropagation()
  }
  const handleRemovePokemon = (e: any) => {
    dispatch(removePokemonOfTeam(pokemonInfo))
    e.stopPropagation()
  }


  return {
    isLoading,
    pokemonInfo,
    handleAddPokemon,
    handleRemovePokemon
  }
}
