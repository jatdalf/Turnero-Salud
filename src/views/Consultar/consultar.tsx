import BtnSalir from '../../component/btnSalir/btnSalir'
import styles from './consultar.module.css'
import Calendario from '../../component/calendario/calendario'
import CalendarioMensual from '../../component/calendarioMensual/calendarioMensual'
import CalendarioDesdeHasta from '../../component/calendario-desde-hasta/CalendarioDesdeHasta'


const ConsultarAgenda = ()=>{ 

    return(
      <div className={styles.fondo}>
        <h2 className={styles.consultarH2}>Base de datos Agendados</h2>
        <fieldset className={styles.consultarFieldset}>
          <legend>consulta por dia</legend>
          <ul className={styles.contenedorAgenda}>
            <li>Fecha:</li>
            <li><Calendario /></li>
          </ul>              
        </fieldset>
        <fieldset className={styles.consultarFieldset}>
          <legend>consulta por mes</legend>
          <ul className={styles.contenedorAgenda}>
            <li>Seleccione Mes:</li>
            <li><CalendarioMensual /></li>
          </ul>      
        </fieldset>
        <fieldset className={styles.consultarFieldset}>
          <legend>consulta por rango de fechas</legend>
          <ul className={styles.contenedorAgenda}>
            <li>Fecha desde/hasta</li>
            <li><CalendarioDesdeHasta /></li>
          </ul>    
        </fieldset>
        <fieldset className={styles.consultarFieldset}>
            <div>

            </div>
            <BtnSalir />       
        </fieldset>
      </div>
    )
}

export default ConsultarAgenda