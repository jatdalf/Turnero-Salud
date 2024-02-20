import React, { useRef, useState } from 'react';
import guardar from '../../assets/guardar.png';
import styles from './agendar.module.css';
import BtnSalir from '../../component/btnSalir/btnSalir'
import Calendario from '../../component/calendario/calendario';
import { Link } from 'react-router-dom';
import { proveedoresDB } from '../../assets/proveedoresDB';
import horariosDb from '../../assets/horariosDb';
import Card from '../../component/card/card';

const Agendar: React.FC = () => {  
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  
  const baseHoras = horariosDb()
  const currentProv = proveedoresDB.slice(0)

  const textareaRef = useRef<HTMLTextAreaElement>(null); // Referencia al textarea
  const handleVolumenKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
      if (textareaRef.current) {
        textareaRef.current.focus(); // Enfocar el textarea
      }
    }
  };
  const volumenRef = useRef<HTMLInputElement>(null);
  const handleOpKeyDown =(event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
        if (volumenRef.current) {
            volumenRef.current.focus(); // Enfocar el textarea
        }
      }
    };

    const guardarAgenda = () => {
        // Obtener la fecha seleccionada del componente Calendario
        const fechaSeleccionada = selectedDate ? selectedDate.toLocaleDateString() : '';        
        // Obtener el valor seleccionado en el select con id "horaInicio"
        const horaInicioSeleccionada = (document.getElementById('horaInicio') as HTMLSelectElement)?.value || '';
      
        // Obtener el valor seleccionado en el select con id "proveedor"
        const proveedorSeleccionado = (document.getElementById('proveedor') as HTMLSelectElement)?.value || '';
      
        // Obtener el valor del contenido del input con id "op"
        const opValor = (document.getElementById('op') as HTMLInputElement)?.value || '';
      
        // Obtener el valor del contenido del input con id "volumen"
        const volumenValor = (document.getElementById('volumen') as HTMLInputElement)?.value || '';
      
        // Obtener el valor del contenido del textarea con id "obs"
        const obsValor = (document.getElementById('obs') as HTMLTextAreaElement)?.value || '';
      
        // Construir el mensaje del alert
        const mensaje = `
          Fecha: ${fechaSeleccionada}
          Hora de inicio: ${horaInicioSeleccionada}
          Proveedor: ${proveedorSeleccionado}
          Orden de provisión: ${opValor}
          Volumen aproximado: ${volumenValor}
          Notas/Observaciones: ${obsValor}          
        `;
      
        // Mostrar el alert con el mensaje
        alert(mensaje);
    };
      
 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar el envío automático del formulario
    // Aquí puedes agregar la lógica para guardar los datos o realizar alguna acción
  };

  return (
    <div className={styles.fondo}>
      <h2 className={styles.agendarH2}>Agendar nuevo turno</h2>
      <form id="agendar" onSubmit={handleSubmit}>
        <fieldset className={styles.agendarFieldset}>
          <legend>Ingrese los datos</legend>
          <div>
            <ul className={styles.contenedorAgenda}>
              <li>Fecha:</li>
              <li>
              <Calendario onDateChange={handleDateChange} /> {/* Pasa la función handleDateChange como prop */}
              </li>              
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Rango horario:</li>
              <li>
                <select id="horaInicio" className={styles.horaInicio}>
                  {baseHoras.map((hora: string, index: number) => (
                    <option key={index} value={hora}>
                      {hora}
                    </option>
                  ))}
                </select>
              </li>            
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Proveedor:</li>
              <li>
                <select 
                    id="proveedor"
                    className={styles.proveedores}                    
                    >
                  {currentProv.map((proveedor, index) => (
                    <option key={proveedor.id} value={proveedor.nombre}>
                      {proveedor.nombre}
                    </option>
                  ))}
                </select>
              </li>            
              <li className={styles.agregaProveedor}>
                <Link to="/proveedores">
                  <input type='submit'value="+" />
                  <span className={styles.tooltip} id="ttip">Agregar Proveedor</span>
                </Link>
              </li>
            </ul> 
            
            <ul className={styles.contenedorAgenda}>
              <li>Orden de provisión:</li>
              <li>
                <input 
                    className={styles.ordenProvision} 
                    id="op" 
                    type="text" 
                    placeholder='Ingrese OP/OC' 
                    required
                    onKeyDown={handleOpKeyDown}
                    maxLength={20}
                />
              </li>                       
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Volumen aproximado:</li>
              <li>
                <input className={styles.volumen} 
                    ref={volumenRef}
                    id="volumen" 
                    type="text" 
                    placeholder='Cant. pallets/Cajas' 
                    required
                    onKeyDown={handleVolumenKeyDown} // Manejar el evento onKeyDown
                    maxLength={20}
                />
              </li>                         
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Notas/Observaciones:</li>
              <li>
                <textarea
                    ref={textareaRef}
                    className={styles.obs} 
                    id="obs" 
                    name="obs"  
                    placeholder='Informacion adicional' 
                    maxLength={100}
                />
              </li>            
            </ul>            
          </div>
          <hr />
          <ul className={styles.contenedorAgenda}>
            <li>
              <fieldset className={styles.Turnos}>            
                <legend>Turnos del dia</legend>
                    {baseHoras.map((h)=>(
                      <Card/>
                    ))}
              </fieldset>
            </li>
            <li>
              <button className={styles.HeaderButton} onClick={guardarAgenda}>
                <img className={styles.HeaderIcon} src={guardar} alt="salir/volver" />
                <p className={styles.HeaderButton1Text}>Guardar Datos</p>
              </button>
              <BtnSalir />       
            </li>       
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

export default Agendar;