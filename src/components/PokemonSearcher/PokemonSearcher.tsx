import { useEffect, useState } from "react"
import { Pokemon } from "../../types/Pokemon"
import { PokemonList } from "../PokemonList/PokemonList"

export const PokemonSearcher: React.FunctionComponent = () => {

  const [searchInput, setSearchInput]: [string, any] = useState('')
  const [pokemons, setPokemons]: [Pokemon[], any] = useState([])
  const [filteredPokemons, setFilteredPokemons]: [Pokemon[], any] = useState([])

  const fetchPokemons = async (searchInput: string = ''): Promise<any> => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      const data = await response.json()
      setPokemons(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  // para obtener los 151 pokemones solicitados
  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    if (searchInput) {
      setFilteredPokemons(pokemons.filter((p: Pokemon) => p.name.includes(searchInput)))
    } else {
      setFilteredPokemons(pokemons)
    }
  }, [pokemons, searchInput])
  

  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-6">
        <input type="text" className="form-control" placeholder="Que pokemon buscas..." onChange={(e) => setSearchInput(e.target.value)}/>
        </div>
      </div>
      <PokemonList pokemons={filteredPokemons}/>
    </>
  )
}
