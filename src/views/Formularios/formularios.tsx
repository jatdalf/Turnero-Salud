import BtnSalir from '../../component/btnSalir/btnSalir'
import styles from './formularios.module.css'

const Formularios = ()=>{
    return(
        <div className={styles.fondo}>
            <h2 className={styles.formulariosH2}>En desarrollo</h2>
            <div className={styles.salir}>
                <BtnSalir />
            </div>
        </div> 
    )
}

export default Formularios