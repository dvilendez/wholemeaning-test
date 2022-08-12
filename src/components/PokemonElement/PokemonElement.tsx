import './Pokemon.scss';
import { Pokemon } from "../../types/Pokemon";
import { useEffect, useState } from 'react';

interface PokemonElementProps {
  pokemon: Pokemon
}

export const PokemonElement = ({ pokemon }: PokemonElementProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonInfo, setPokemonInfo]: [any, any] = useState({})

  const getPokemonInfo = async () => {
    setIsLoading(true)
    const response = await fetch(pokemon.url)
    const data = await response.json()
    console.log(data)
    setPokemonInfo(data)
    setIsLoading(false)
  }
  useEffect(() => {
    getPokemonInfo()
  }, [])
  
  return (
    <div className='pokemon'>
      <div className='pokemon__image'>
        {
          !isLoading ?
            <img src={pokemonInfo.sprites.front_default} alt="" /> :
            <img
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt=''
            />
        }
      </div>
      <div className='pokemon__name'>
        <p>{pokemon.name}</p>
      </div>
    </div>
  )
}

