import { useEffect, useState } from "react"
import { getPokemons } from "../../store/slices/pokemon"
import { PokemonType } from "../../types/pokemon.type"
import { PokemonList } from "../PokemonList/PokemonList"
import { useAppDispatch, useAppSelector } from "../../hooks/store.hook"

export const PokemonSearcher: React.FunctionComponent = () => {

  const { pokemons } = useAppSelector( (state) => state.pokemon)
  const dispatch = useAppDispatch()

  const [searchInput, setSearchInput]: [string, any] = useState('')
  const [filteredPokemons, setFilteredPokemons]: [PokemonType[], any] = useState([])

  // para obtener los 151 pokemones solicitados
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  useEffect(() => {
    var regex = /^[0-9]*$/g
    let isNumber = regex.test(searchInput)
    if (isNumber && searchInput) {
      console.log(searchInput)
      // eslint-disable-next-line array-callback-return
      setFilteredPokemons(pokemons.filter((p: PokemonType) => {
        const urlSplitted = p.url.split('/')
        if (urlSplitted[urlSplitted.length-2] === searchInput) {
          return p
        } 
      }))
    } else if (searchInput) {
      setFilteredPokemons(pokemons.filter((p: PokemonType) => p.name.includes(searchInput)))
    } else {
      setFilteredPokemons(pokemons)
    }
  }, [pokemons, searchInput])
  
  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Que pokemon buscas..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <PokemonList pokemons={filteredPokemons}/>
    </>
  )
}
