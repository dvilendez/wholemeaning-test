import { usePokemon } from '../../hooks/usePokemon.hook'
import './PokemonDetail.scss'
import logo from '../../assets/gifs/simple_pokeball.gif'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store.hook'
import { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons';
export const PokemonDetail = () => {
  let { pokemonId } = useParams();
  let pId = Number(pokemonId)

  const [buttonType, setButtonType] = useState('add')
  const {
    isLoading,
    pokemonInfo,
    handleAddPokemon,
    handleRemovePokemon
  } = usePokemon({
    name: '',
    id: pId,
    url: `https://pokeapi.co/api/v2/pokemon/${pId}/`
  })

  const { team } = useAppSelector(state => state.pokemon)

  const checkPokemonInTeam = () => {
    const isInTeam = team.find(p => p.id === pId )
    console.log(isInTeam, team)
    setButtonType(isInTeam ? 'remove': 'add')
  }

  useEffect(() => {
    checkPokemonInTeam()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team])

  let navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  }
  
  return (
    <>
      <div className="row text-center">
        <div className="offset-4 col-4">
          <div className="row pokemon-detail">
            <button
              className="btn btn-primary pokemon-detail__float"
              onClick={goTo}
            >
              <ArrowLeft/>
            </button>
            <div className='col-12 pokemon-detail__name'>
              { pokemonInfo.name }
            </div>
            <div className="col-12 pokemon-detail__image">
            {
              !isLoading ?
              <img src={pokemonInfo.sprites.front_default} alt="pokemon" /> :
              <img src={logo} alt="loading..."/>
            }
            </div>
            <div className='col-12 pokemon-detail__number'>
              Número: {pokemonInfo.id}
            </div>
            <hr />
            <div className='col-12 pokemon-detail__height'>
              Altura: {pokemonInfo.height}
            </div>
            <hr />
            <div className='col-12 pokemon-detail__types'>
              Tipos:
              <div className='row'>
                {
                  pokemonInfo.types?.map((element: any) => (
                    <div
                      className='col-12'
                      key={element.slot}
                    >{element.type.name}</div>
                  ))
                }
              </div>
            </div>
            <hr />
            <div className='col-12 pokemon-detail__stats'>
              Estadísticas base:
              <div className='row'>
                {
                  pokemonInfo.stats?.map((element: any, index: number) => (
                    <div
                      className='col-12'
                      key={index}
                    >{element.stat.name}: {element.base_stat}</div>
                  ))
                }
              </div>
            </div>
            {
              buttonType === 'add' ? 
                <button
                  className='btn btn-success pokemon-detail__float pokemon-detail__float--right'
                  onClick={handleAddPokemon}
                >+</button> :
                <button
                  className='btn btn-danger pokemon-detail__float pokemon-detail__float--right'
                  onClick={handleRemovePokemon}
                >-</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}
