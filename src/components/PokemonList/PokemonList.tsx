import { useState } from "react"
import { Pokemon } from '../../types/Pokemon'
import { PokemonElement } from "../PokemonElement/PokemonElement"

interface PokemonListProps {
  pokemons: Pokemon[]
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
