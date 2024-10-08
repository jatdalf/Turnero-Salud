import React, { useRef, useState } from 'react';
import guardar from '../../assets/guardar.png';
import styles from './agendar.module.css';
import BtnSalir from '../../component/btnSalir/btnSalir'
import Calendario from '../../component/calendario/calendario';
import { Link } from 'react-router-dom';
import { proveedores } from '../../assets/proveedoresDB';
import horariosDb from '../../assets/horariosDb';
import Card from '../../component/card/card';
import Swal from 'sweetalert2'
import {saveAs} from 'file-saver'

const Agendar: React.FC = () => {  
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  let datosAgendaString: string = ""
  let localStoreData: string[] = []
  const datosAgenda: string[] = []
  const [OpTextImput, setOpTextImput ] = useState("")
  const [VolumenTextImput, setVolumenTextImput] = useState("")
  const [NotasTextImput, setNotasTextImput] = useState("")

  const createFile =()=>{
    const myFile = new Blob()
    saveAs('')
  }


  const handleScledules = ()=>{
    const mensajeGuardado = localStorage.getItem('agendaMensaje');
    
    if (mensajeGuardado) {
      // Convertir la cadena JSON de nuevo a un objeto
      try {
        const datosAgenda: string[] = JSON.parse(datosAgendaString);  
        localStoreData =  datosAgenda[0].split('|')
        console.log(datosAgenda)
        // Utilizar los datos recuperados
      for (let index: number = 0; index < localStoreData.length; index++) {
        
        
      }
      // console.log(datosAgenda); 
      } catch (error) {
        console.log("Json Data Empty")
      }      
      
    } else {
      console.log('No se encontraron datos en el localStorage');
    }
  }

  handleScledules()


  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
 
  const currentProv = proveedores.slice(0)

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
        if (opValor.trim() === ""){
          alert("debe completar el campo OP")
          return;
        }
        const volumenValor = (document.getElementById('volumen') as HTMLInputElement)?.value || '';
        if (volumenValor.trim() === ""){
          alert("debe completar el campo volumen")
          return;
        }
        // Obtener el valor del contenido del textarea con id "obs"
        const obsValor = (document.getElementById('obs') as HTMLTextAreaElement)?.value || '';
      
        // Construir el mensaje del alert
        const mensaje = `
          Fecha: ${fechaSeleccionada} <br>
          Hora de inicio: ${horaInicioSeleccionada}<br>
          Proveedor: ${proveedorSeleccionado}<br>
          Orden de provisión: ${opValor}<br>
          Volumen aproximado: ${volumenValor}<br>
          Notas/Observaciones: ${obsValor}          
        `;
        
        // guardar los datos de la agenda        
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: styles.swal2Confirma,
            cancelButton: styles.swal2Cancela,            
          },
          buttonsStyling: false
        });
        
        swalWithBootstrapButtons.fire({
          title: "Datos a agendar:",
          html: mensaje,          
          showCancelButton: true,
          confirmButtonText: "Agendar!",
          cancelButtonText: "Cancelar",
          reverseButtons: true  
        }).then((result) => {
          if (result.isConfirmed) {            
            datosAgenda.push(`${fechaSeleccionada}|${horaInicioSeleccionada}|${proveedorSeleccionado}|${opValor}|${volumenValor}|${obsValor}`)
            datosAgendaString = JSON.stringify(datosAgenda);
            localStorage.setItem('agendaMensaje', datosAgendaString);
            handleScledules()
            swalWithBootstrapButtons.fire({
              title: "Agendado!",
              text: "Se agendó el turno ingresado.",
              icon: "success"
            });
            setVolumenTextImput("")
            setOpTextImput("")
            setNotasTextImput("")
           
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelado",
              text: "Se canceló la asignación de turno",
              icon: "error"
            });
          }
        });        
  };

  

      
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar el envío automático del formulario
    // Aquí puedes agregar la lógica para guardar los datos o realizar alguna acción
  };
  
  const baseHoras: string[] = horariosDb()
  const HorarioInicial: string[] = []
  
  for (let index = 0; index < baseHoras.length; index++) {
    HorarioInicial.push(baseHoras[index].slice(0,5))
  }
 
  let cont:number = 1;

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
                  {currentProv
            .filter(proveedor => proveedor.vigente) // Filtrar solo los proveedores con vigente=true
            .map((proveedor, index) => (
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
                    onChange={event => setOpTextImput(event.target.value)}
                    value={OpTextImput}
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
                    onChange={event => setVolumenTextImput(event.target.value)}
                    value={VolumenTextImput}
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
                    onChange={event => setNotasTextImput(event.target.value)}
                    value={NotasTextImput}
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
                      <div className={styles.cardContainer}>
                        <Card  
                          customkey={cont++}  
                          cardText={HorarioInicial[cont-2]}                                                                       
                        />                       
                      </div>
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