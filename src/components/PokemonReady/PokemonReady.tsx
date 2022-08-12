import { useState } from "react"
import { PokemonType } from '../../types/pokemon.type'
import './PokemonReady.scss';
import { PokemonElement } from "../PokemonElement/PokemonElement"

export const PokemonReady = () => {
  return (
    <>
      <div className="pokemon-ready">
        <div className="pokemon-ready__title">
          <p>Listo para el combate</p>
        </div>
      </div>
      <div className="row">
        {
          // pokemons.map((p) => (
          //   <div className="col-6">
          //     <PokemonElement pokemon={p}></PokemonElement>
          //   </div>
          // ))
        }
      </div>
    </>
  )
}
