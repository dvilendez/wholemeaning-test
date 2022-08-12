import { useState } from "react"
import { PokemonType } from '../../types/pokemon.type'
import { PokemonElement } from "../PokemonElement/PokemonElement"

interface PokemonListProps {
  pokemons: PokemonType[]
}

export const PokemonList = ({ pokemons = [] }: PokemonListProps) => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {
            pokemons.map((p, i) => (
              <div className="col-3">
                <PokemonElement
                  key={i}
                  pokemon={p}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
