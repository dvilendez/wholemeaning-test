import { PokemonType } from '../../types/pokemon.type'
import { PokemonElement } from "../PokemonElement/PokemonElement"

interface PokemonListProps {
  pokemons: PokemonType[]
}

export const PokemonList = ({ pokemons = [] }: PokemonListProps) => {
  return (
    // <div className='container text-center'>
      <div className="row text-center">
        {
          pokemons.map((p, i) => (
            <div
              className="col-xs-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
              key={p.name}
            >
              <PokemonElement
                pokemon={p}
                buttonType="add"
              />
            </div>
          ))
        }
      </div>
    // </div>
  )
}
