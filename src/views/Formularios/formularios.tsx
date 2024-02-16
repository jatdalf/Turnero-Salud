import BtnSalir from '../../component/btnSalir/btnSalir'
import styles from './formularios.module.css'

const Formularios = ()=>{
    return(
        <div className={styles.fondo}>
            Seccion donde se imprimen los diferentes formularios
            <BtnSalir />
       </div>
    )
}

export default Formularios