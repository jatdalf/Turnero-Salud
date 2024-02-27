import BtnSalir from '../../component/btnSalir/btnSalir'
import nuevoProveedor from '../../assets/agregaProveedor.png'
import editar from '../../assets/editar.png'
import styles from './proveedores.module.css'
import React, { useState } from 'react';

const Proveedores = () =>{
    //cargar base de datos proveedores:

    // Define una interfaz para los objetos de proveedor
    interface Proveedor {
        id: string;
        nombre: string;
        direccion: string;
        localidad: string;
        provincia: string;
        telefono: string;
        email: string;
        vigente: boolean;
        creo: string;
    }

    const [proveedores, setProveedores] = useState<Proveedor[]>([
        // Datos iniciales
        {
          id: "1",
          nombre: "Proveedor 1",
          direccion: "Dirección 1",
          localidad: "Localidad 1",
          provincia: "Provincia 1",
          telefono: "123456789",
          email: "proveedor1@example.com",
          vigente: true,
          creo: "Usuario 1"
        },
        {
          id: "2",
          nombre: "Proveedor 2",
          direccion: "Dirección 2",
          localidad: "Localidad 2",
          provincia: "Provincia 2",
          telefono: "987654321",
          email: "proveedor2@example.com",
          vigente: true,
          creo: "Usuario 2"
        }
      ]);
    
      // Función para agregar un nuevo proveedor
      const agregarProveedor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página
      
        setProveedores((prevProveedores) => {
          const nuevoProveedor: Proveedor = {
            id: String(prevProveedores.length + 1),
            nombre: "Nuevo Proveedor" + (prevProveedores.length + 1),
            direccion: "Nueva Dirección",
            localidad: "Nueva Localidad",
            provincia: "Nueva Provincia",
            telefono: "00000000" + (prevProveedores.length + 1),
            email: "nuevo" + (prevProveedores.length + 1) + "@proveedor.com",
            vigente: true,
            creo: "Usuario"
          };
      
          return [...prevProveedores, nuevoProveedor];
        });
      };
   
    //cada vez que se hace click en un proveedor, mostrar el detalle y habilitar el boton de editar
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState<Proveedor | null>(null);
    
    const handleClickProveedor = (proveedor: Proveedor) => {
      setProveedorSeleccionado(proveedor);
    };

    return(
        <div className={styles.fondo}>
            <h2 className={styles.proveedoresH2}>Proveedores</h2>
            <ul className={styles.contenedorProveedor}>
              <li className={styles.ladoIzquierdo}>
                <fieldset className={styles.proveedorFieldset}>
                    <legend>Listado de Proveedores</legend>
                    <fieldset className={styles.listadoProveedores}>
                        <ol id="listado" className={styles.listado}>
                            {proveedores.map((p )=>(
                                <li key={p.id} onClick={() => handleClickProveedor(p)}>
                                    {p.nombre}
                                </li>                            
                            ))}
                        </ol>
                    </fieldset>
                </fieldset>
              </li>
              <li className={styles.ladoDerecho}>
                <form>
                    <fieldset className={styles.proveedorFieldset}>
                        <legend>Detalle</legend>
                        <div className={styles.filedsetDerecho}>
                        <fieldset>
                            <legend>Nombre o razón social:</legend>
                            <input type="text" value={proveedorSeleccionado?.nombre || ''} readOnly />
                            </fieldset>
                            <fieldset>
                            <legend>Dirección:</legend>
                            <input type="text" value={proveedorSeleccionado?.direccion || ''} readOnly />
                            </fieldset>
                            <fieldset>
                            <legend>Ciudad:</legend>
                            <input type="text" value={proveedorSeleccionado?.localidad || ''} readOnly />
                            </fieldset>
                            <fieldset>
                            <legend>Provincia:</legend>
                            <input type="text" value={proveedorSeleccionado?.provincia || ''} readOnly />
                            </fieldset>
                            <fieldset>
                            <legend>Teléfono:</legend>
                            <input type="text" value={proveedorSeleccionado?.telefono || ''} readOnly />
                            </fieldset>
                            <fieldset>
                            <legend>Email:</legend>
                            <input type="text" value={proveedorSeleccionado?.email || ''} readOnly />                
                        </fieldset>    
                        <hr></hr>
                        <button className={styles.btnEditar} onClick={agregarProveedor}>
                            <img className={styles.btnEditarIcon} src={nuevoProveedor} alt='modificar/editar datos'></img>
                            <p className={styles.btnAgregaProveedorText}>Agregar Proveedor</p>
                        </button>
                        <button className={styles.btnEditar}>
                            <img className={styles.btnEditarIcon} src={editar} alt='modificar/editar datos'></img>
                            <p className={styles.btnEditarText}>Editar</p>
                        </button>
                        <BtnSalir />
                        </div>  
                    </fieldset>
                </form>
              </li>
            </ul>
        </div>
    )
}

export default Proveedores