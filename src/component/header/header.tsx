import React from "react";
import styles from './header.module.css'
import calendarSearch from '../../assets/calendarSearch.png'
import profile from '../../assets/profile.png'
import gears from '../../assets/gears.png'
import formulario from '../../assets/Form.png'
import calendar6 from '../../assets/calendar6.png'

const Header =()=>{
    return(
        <div className={styles.HeaderContainer}>
          <div className={styles.HeaderBackground}>
            <button className={styles.HeaderButton}>
             <img className={styles.HeaderIcon} src={calendar6} alt="Agendar en calendario" />  
             <p className={styles.HeaderButton1Text}>Agendar</p>              
            </button>
            <button className={styles.HeaderButton}>
             <img className={styles.HeaderIcon} src={calendarSearch} alt="Buscar en calendario" /> 
             <p className={styles.HeaderButton2Text}>Ver Agenda</p>           
            </button>
            <button className={styles.HeaderButton}>
             <img className={styles.HeaderIcon} src={profile} alt="Listado de proveedores" />            
             <p className={styles.HeaderButton3Text}>Proveedores</p>   
            </button>
            <button className={styles.HeaderButton}>
             <img className={styles.HeaderIcon} src={gears} alt="editar parametros" />
             <p className={styles.HeaderButton4Text}>Parámetros</p>               
            </button>
            <button className={styles.HeaderButton}>
             <img className={styles.HeaderIcon} src={formulario} alt="Formularios" />
             <p className={styles.HeaderButton4Text}>Formularios</p>               
            </button>
         
          </div>
        </div>
    )
}

export default Header;