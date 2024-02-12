import { Link } from "react-router-dom"
import styles from './agendar.module.css'

const Agendar = ()=>{
    return(
        <>
          <h2 className={styles.agendarH2}>Agendar nuevo turno</h2>
          <form>
            <fieldset className={styles.agendarFieldset}>
                <legend>Ingrese los datos</legend>
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