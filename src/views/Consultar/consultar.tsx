import { Link } from "react-router-dom"

const ConsultarAgenda = ()=>{
    return(
        <>
            <h2>Base de datos Agendados</h2>
            <fieldset>
              <legend>consulta por dia</legend>
              <p>Fecha:</p>
            </fieldset>
            <fieldset>
              <legend>consulta por mes</legend>
              <p>seleccione Mes:</p>
            </fieldset>
            <fieldset>
              <legend>consulta por rango de fechas</legend>
              <p>fecha desde:</p>
              <p>fecha hasta:</p>
            </fieldset>
            <fieldset>
                <div>

                </div>
                <Link to="/Home">     
                        <button>Salir</button>
                </Link>           
            </fieldset>
        </>
    )
}

export default ConsultarAgenda