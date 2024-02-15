import styles from './btnSalir.module.css'
import { Link } from 'react-router-dom';
import salir from '../../assets/salir.png';

const BtnSalir =()=>{
    return(
        <Link to="/Home">
              <button className={styles.btnSalir}>
                <img className={styles.btnSalirIcon} src={salir} alt="salir/volver" />
                <p className={styles.btnSalirText}>Salir</p>
              </button>
        </Link>   
    )
}

export default BtnSalir