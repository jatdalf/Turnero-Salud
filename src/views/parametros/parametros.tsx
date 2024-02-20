import BtnSalir from '../../component/btnSalir/btnSalir'
import styles from './parametros.module.css'

const Parametros = ()=>{
    return(
        <div className={styles.maincontainer}>
            <div className={styles.fondo}>
                <h2 className={styles.parametrosH2}>En desarrollo</h2>
                <div className={styles.salir}>
                    <BtnSalir />
                </div>
            </div>  
        </div>
    )
}

export default Parametros