import { Link } from "react-router-dom"
import styles from './agendar.module.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Agendar: React.FC = ()=>{
    const [value, onChange] = useState<Value>(new Date());
        // Paso 2: Crear estado para la fecha actual
    const [currentDate, setCurrentDate] = useState<string>(new Date().toISOString().slice(0, 10));
    let fechaprimaria = currentDate;
    
    
    // Manejar cambios en el input
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentDate(event.target.value);
    };

    return(
        <>
          <h2 className={styles.agendarH2}>Agendar nuevo turno</h2>
          <form>
            <fieldset className={styles.agendarFieldset}>
              <legend>Ingrese los datos</legend>                 
              <div >
                <ul className={styles.contenedorAgenda}>
                  <li>Fecha:</li>
                  <li> 
                    <input
                        type="date"
                        value={currentDate} // Asignar la fecha actual como valor
                        onChange={handleDateChange} // Manejar cambios en el input
                    />
                  </li>
                  {/* <li><Calendar onChange={onChange} value={value} /></li>                   */}
                </ul>
                  <p>Rango horario:</p>
                  <p>Proveedor:</p>
                  <p>Orden de provisión:</p>
                  <p>Volumen aproximado:</p>
                  <p>Notas/Observaciones:</p>              
              </div>
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