import React from 'react';
import logo from '../../assets/heartline-and-heart.png';
import styles from './Home.module.css';
import Header from '../../component/header/header'
import { useState } from 'react';

const Home = ()=>{
  const [dbAgenda, setdsAgenda] = useState(0)
  
  return(
    <>
      <Header /> 
      <div className={styles.Home}>
        <img src={logo} className={styles.HomeLogo} alt="logo" />            
      </div>      
    </>
  )    
}
//Imagen por <a href="https://www.freeimages.com">Freeimages.com</a>
export default Home