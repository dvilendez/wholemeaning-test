import './Pokemon.scss';
import { useNavigate } from "react-router-dom";
import { PokemonType } from "../../types/pokemon.type";
import logo from '../../assets/gifs/simple_pokeball.gif'
import { usePokemon } from '../../hooks/usePokemon.hook';

interface PokemonElementProps {
  pokemon: PokemonType,
  buttonType: string
}

export const PokemonElement = ({ pokemon, buttonType }: PokemonElementProps) => {
  const {
    isLoading,
    pokemonInfo,
    handleAddPokemon,
    handleRemovePokemon
  } = usePokemon({
    ...pokemon
  })

  let navigate = useNavigate();

  const goToDetail = () => {
    if (!isLoading) {
      navigate(`/detail/${pokemonInfo.id}`);
    }
  }
  
  return (
    <div className='pokemon' onClick={goToDetail}>
      {
          buttonType === 'add' ? 
            <button
              className={`btn btn-success pokemon__float ${isLoading ? 'disabled' : ''}`}
              onClick={handleAddPokemon}
            >+</button> :
            <button
              className={`btn btn-danger pokemon__float ${isLoading ? 'disabled' : ''}`}
              onClick={handleRemovePokemon}
            >-</button>
      }
      
      <div className='pokemon__image'>
        {
          !isLoading ?
          <img src={pokemonInfo.sprites.front_default} alt="pokemon" /> :
          <img src={logo} alt="loading..."/>
        }
      </div>
      <div className='pokemon__name'>
        <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
      </div>
    </div>
  )
}

