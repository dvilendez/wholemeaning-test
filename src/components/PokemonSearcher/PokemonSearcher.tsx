/* eslint-disable jsx-a11y/anchor-is-valid */
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

  const [pages, setPages] = useState(0)
  const [pageIndex, setPageIndex] = useState(1)
  const [elementsPerPage] = useState(10)
  const [pokemonInPage, setPokemonInPage]: [PokemonType[], any] = useState([])

  // para obtener los 151 pokemones solicitados
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  useEffect(() => {
    var regex = /^[0-9]*$/g
    let isNumber = regex.test(searchInput)
    if (isNumber && searchInput) {
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
    setPageIndex(1)
  }, [pokemons, searchInput])

  // aqui calculamos los pokemones que van a quedar en la pagina actual
  useEffect(() => {
    setPokemonInPage(filteredPokemons.slice(elementsPerPage * (pageIndex - 1), pageIndex * elementsPerPage))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPokemons, pageIndex])

  // aqui calculamos la cantidad de paginas
  useEffect(() => {
    setPages(Math.ceil(filteredPokemons.length/elementsPerPage))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPokemons])

  const next = () => {
    setPageIndex(currentPage => {
      if (currentPage < pages) {
        return currentPage + 1
      }
      return currentPage
    })
  }
  
  const back = () => {
    setPageIndex(currentPage => {
      if (currentPage > 1) {
        return currentPage - 1
      }
      return currentPage
    })
  }
  
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
      <PokemonList pokemons={pokemonInPage}/>
      <div className="row justify-content-md-center">
        <div className="col-6">
          <nav aria-label="Paginacion pokemon">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" onClick={back} aria-label="Anterior">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                [...Array(pages)].map((e, index) => (
                  <li className="page-item" key={index}><a className="page-link" onClick={() => setPageIndex(index + 1)}>{index + 1}</a></li>
                ))
              }
              <li className="page-item">
                <a className="page-link" onClick={next} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
