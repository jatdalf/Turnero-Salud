import React from 'react';
import logo from '../../assets/heartline-and-heart.png';
import styles from './Home.module.css';
import Header from '../../component/header/header'


const Home = ()=>{  
  
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