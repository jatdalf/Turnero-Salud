import BtnSalir from '../../component/btnSalir/btnSalir'
import nuevoProveedor from '../../assets/agregaProveedor.png'
import editar from '../../assets/editar.png'
import styles from './proveedores.module.css'
import React, { useState } from 'react';

const Proveedores: React.FC = () =>{
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

const [proveedores, setproveedores] = useState<Proveedor[]>([
        // Datos iniciales
        {
        id: "1",
        nombre: "proveedor1",
        direccion: "direccion1",
        localidad: "Mercedes",
        provincia: "San Luis",
        telefono: "000-000000",
        email: "proveedor1@email.com",
        vigente: true,
        creo: "test"
        },
        {
        id: "2",
        nombre: "test",
        direccion: "direccion 000",
        localidad: "Rosario",
        provincia: "Santa Fe",
        telefono: "372-372372",
        email: "test@mail.com",
        vigente: true,
        creo: "test"
        },
        {
        id: "3",
        nombre: "Deshabilitado",
        direccion: "sin direccion",
        localidad: "Córdoba",
        provincia: "Córdoba",
        telefono: "351-999 999999",
        email: "prueba@prueba.com",
        vigente: false,
        creo: "test"
        },
        {
        id: "4",
        nombre: "NACION",
        direccion: "calle 1 esquina calle 2",
        localidad: "Ciudad Autónoma de Buenos Aires",
        provincia: "Buenos Aires",
        telefono: "1177-123456",
        email: "sin datos",
        vigente: true,
        creo: "test"
        },
        {
        id: "5",
        nombre: "IDM",
        direccion: "calle sin nombre 0",
        localidad: "Córdoba",
        provincia: "Córdoba",
        telefono: "156 200300",
        email: "idm@hotmail.com",
        vigente: true,
        creo: "test"
        },
        {
            id: "6",
            nombre: "DNM",
            direccion: "calle 123",
            localidad: "Córdoba",
            provincia: "Córdoba",
            telefono: "477-12345",
            email: "dnm@dnm.com",
            vigente: true,
            creo: "test"
        },
        {
            id: "7",
            nombre: "PROPATO",
            direccion: "calle 123",
            localidad: "Córdoba",
            provincia: "Córdoba",
            telefono: "477-12345",
            email: "dnm@dnm.com",
            vigente: false,
            creo: "test"
        },
        {
            id: "8",
            nombre: "UNC",
            direccion: "ciudad universitaria",
            localidad: "Córdoba",
            provincia: "Córdoba",
            telefono: "3526 333333",
            email: "hemoderivados@unc.com",
            vigente: true,
            creo: "test"
        }
      ]);      
    
      // Función para agregar un nuevo proveedor
      const agregarProveedor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página
      
        setproveedores((prevProveedores) => {
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

    const modificaProveedor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    }
   
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
                        <button className={styles.btnEditar} onClick={modificaProveedor}>
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