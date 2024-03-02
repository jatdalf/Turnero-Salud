import styles from './card.module.css'
import circuloAmarillo from '../../assets/CirculoAmarillo.png'
import circuloVerde from '../../assets/CirculoVerde.png'

type cardProps = {
    customkey: number;    
    cardText: string;
}


const Card = (props: cardProps) =>{     
  const cardKey: number = props.customkey
  const texto: string = props.cardText

  const datosGuardados = localStorage.getItem('agendaMensaje');
  
    return(
        <div className={styles.cardContainer}>
            <img             
                key={cardKey}
                src={circuloVerde}
                className={styles.cardImg} 
            />           
            <p className={styles.cardText} >
               {texto}
            </p>
            
        </div>
    )
}

export default Card