import './PokemonTeam.scss';
import { PokemonElement } from "../PokemonElement/PokemonElement"
import { useAppSelector } from "../../hooks/store.hook";

export const PokemonTeam = () => {
  const { team } = useAppSelector( (state) => state.pokemon)
  return (
    <>
      <div className="pokemon-team">
        <div className="pokemon-team__title">
          <p>Listo para el combate</p>
        </div>
        <div className="row text-center">
          {
            team.length ? 
              team.map((p) => (
                <div
                  className="col-xs-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6"
                  key={p.name}
                >
                  <PokemonElement
                    
                    pokemon={p}
                    buttonType="remove"
                  ></PokemonElement>
                </div>
              )) :
              <p>Lista vacía, no hay ningun pokemon listo</p>
          }
        </div>
      </div>
    </>
  )
}
