import { Link } from "react-router-dom"

const Agendar = ()=>{
    return(
        <>
          <h2>Agendar nuevo turno</h2>
          <form>
            <fieldset>
                <legend>ingrese los datos</legend>
                <p>Fecha:</p>
                <p>Rango horario:</p>
                <p>Proveedor:</p>
                <p>Orden de provisión:</p>
                <p>Volumen aproximado:</p>
                <p>Notas/Observaciones:</p>
                <hr />
                <p>
                    <fieldset>
                      <legend>Turnos del dia</legend>
                    </fieldset>
                    <input type="submit" value="Guardar datos"></input>   
                    <Link to="/Home">     
                        <button>Salir</button>
                    </Link>           
                </p>
            </fieldset>
            </form>
        </>
    )
}

export default Agendar