import React, { useState } from 'react';
import guardar from '../../assets/guardar.png';
import styles from './agendar.module.css';
import BtnSalir from '../../component/btnSalir/btnSalir'
import Calendario from '../../component/calendario/calendario';


const Agendar: React.FC = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const horaInicio: string = '09:00';
  const intervalo: string = '00:30';
  const horaFinal: string = '14:00';
  
  const sumarIntervalo = (hora: string, intervalo: string): string => {
      const [horas, minutos] = hora.split(':').map(Number);
      const [intervaloHoras, intervaloMinutos] = intervalo.split(':').map(Number);
      
      let nuevaHora = horas + intervaloHoras;
      let nuevosMinutos = minutos + intervaloMinutos;
      
      if (nuevosMinutos >= 60) {
          nuevaHora += 1;
          nuevosMinutos -= 60;
        }
        
        return `${String(nuevaHora).padStart(2, '0')}:${String(nuevosMinutos).padStart(2, '0')}`;
    };
    
    const Horarios: string[] = [];
    let horaActual: string = horaInicio;
    let rangosHorarios: string[] = []
    
    while (horaActual <= horaFinal) {
        Horarios.push(horaActual);    
        horaActual = sumarIntervalo(horaActual, intervalo);
    }
    for (let i = 1; i < Horarios.length; i++) {
        rangosHorarios.push(Horarios[i-1] + " a " + Horarios[i])    
    }
    
    const proveedores: string[] =[
      "DNM",
      "PROPATO",
      "UNC",
      "NACION",
      "IDM",
      "DEL LIBERTADOR",
      "BIOQUIMICOS DE CBA",
      "ERCO",
      "SALUD RENAL",
      "MEDICAL PRO",
      "PHARMA CENTER",
    ]
  return (
    <>
      <h2 className={styles.agendarH2}>Agendar nuevo turno</h2>
      <form>
        <fieldset className={styles.agendarFieldset}>
          <legend>Ingrese los datos</legend>
          <div>
            <ul className={styles.contenedorAgenda}>
              <li>Fecha:</li>
              <li>
                <Calendario />
              </li>              
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Rango horario:</li>
              <li>
                <select className={styles.horaInicio} id="horaInicio">
                  {rangosHorarios.map((hora, index) => (
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
                <select className={styles.proveedores} id="proveedor">
                  {proveedores.map((proveedor, index) => (
                    <option key={index} value={proveedor}>
                      {proveedor}
                    </option>
                  ))}
                </select>
              </li>            
            </ul> <ul className={styles.contenedorAgenda}>
              <li>Orden de provisión:</li>
              <li>
                <input className={styles.ordenProvision} id="op" type="text" placeholder='Ingrese OP/OC' required/>
              </li>                       
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Volumen aproximado:</li>
              <li>
                <input className={styles.volumen} id="volumen" type="text" placeholder='Cant. pallets/Cajas' required/>
              </li>                         
            </ul>
            <ul className={styles.contenedorAgenda}>
              <li>Notas/Observaciones:</li>
              <li>
                <textarea className={styles.obs} id="obs" name="obs"  placeholder='Informacion adicional' />
              </li>            
            </ul>            
          </div>
          <hr />
          <ul className={styles.contenedorAgenda}>
            <li>
              <fieldset className={styles.Turnos}>            
                <legend>Turnos del dia</legend>
              </fieldset>
            </li>
            <li>
              <button className={styles.HeaderButton}>
                <img className={styles.HeaderIcon} src={guardar} alt="salir/volver" />
                <p className={styles.HeaderButton1Text}>Guardar Datos</p>
              </button>

              {/* </li>  
                <li> */}
                <BtnSalir />       
            </li>       
          </ul>
        </fieldset>
      </form>
    </>
  );
};

export default Agendar;