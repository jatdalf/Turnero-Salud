import { Link } from "react-router-dom"

const Proveedores = () =>{
    return(
        <>
            <h2>Proveedores</h2>
            <fieldset>
                <label>Listado de Proveedores</label>
            </fieldset>

            <form>
                <fieldset>
                    <label>Detalle</label>
                    <p>Nombre o razon social:</p>
                    <p>Dirección:</p>
                    <p>Ciudad:</p>
                    <p>Provincia:</p>
                    <p>Telefono:</p>
                    <p>Email:</p>    
                    <hr></hr>
                    <input type="submit" value="Agregar Proveedor"></input>
                    <button>Modificar</button>
                    <Link to="/Home">     
                        <button>Salir</button>
                    </Link>    
                </fieldset>
            </form>
        </>
    )
}

export default Proveedores