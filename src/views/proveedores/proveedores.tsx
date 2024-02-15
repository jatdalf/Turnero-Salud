import BtnSalir from '../../component/btnSalir/btnSalir'
import agregarProveedor from '../../assets/agregaProveedor.png'
import editar from '../../assets/editar.png'
import styles from './proveedores.module.css'


const Proveedores = () =>{
    return(
        <>
            <h2 className={styles.proveedoresH2}>Proveedores</h2>
            <ul className={styles.contenedorProveedor}>
              <li className={styles.ladoIzquierdo}>
                <fieldset className={styles.proveedorFieldset}>
                    <legend>Listado de Proveedores</legend>
                </fieldset>
              </li>
              <li className={styles.ladoDerecho}>
                <form>
                    <fieldset className={styles.proveedorFieldset}>
                        <legend>Detalle</legend>
                        <p>Nombre o razon social:</p>
                        <p>Dirección:</p>
                        <p>Ciudad:</p>
                        <p>Provincia:</p>
                        <p>Telefono:</p>
                        <p>Email:</p>    
                        <hr></hr>
                        <button className={styles.btnEditar}>
                            <img className={styles.btnEditarIcon} src={agregarProveedor} alt='modificar/editar datos'></img>
                            <p className={styles.btnAgregaProveedorText}>Agregar Proveedor</p>
                        </button>
                        <button className={styles.btnEditar}>
                            <img className={styles.btnEditarIcon} src={editar} alt='modificar/editar datos'></img>
                            <p className={styles.btnEditarText}>Editar</p>
                        </button>
                        <BtnSalir />  
                    </fieldset>
                </form>
              </li>
            </ul>
        </>
    )
}

export default Proveedores