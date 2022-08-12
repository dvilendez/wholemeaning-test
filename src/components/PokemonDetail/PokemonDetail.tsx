import './PokemonDetail.scss'

export const PokemonDetail: React.FunctionComponent = () => {
  return (
    <>
      <div className="row text-center pokemon-detail">
        <div className="col-4">
          <button className="btn btn-success">Volver</button>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12 pokemon-detail__image">
              <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" />
            </div>
            <div className="col-12">
              <ul>
                <li>Nombre: Gatomon</li>
                <li>Tipo: Gatomon</li>
                <li>Evolucion: Gatomon</li>
                <li>Genero: Gatomon</li>
                <li>Generacion: Gatomon</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-default">Agregar a la lista</button>
        </div>
      </div>
    </>
  )
}
