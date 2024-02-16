import BtnSalir from '../../component/btnSalir/btnSalir'
import styles from './parametros.module.css'

const Parametros = ()=>{
    return(
        <div className={styles.fondo}>
            seccion para administrar los parametros generales
            <BtnSalir />
        </div>
    )
}

export default Parametros