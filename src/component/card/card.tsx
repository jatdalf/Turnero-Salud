import styles from './card.module.css'
import circuloAmarillo from '../../assets/CirculoAmarillo.png'
import circuloVerde from '../../assets/CirculoVerde.png'

const Card = (props: Object) =>{     
    return(
        <div className={styles.cardContainer}>
            <img             
                src={circuloVerde}
                className={styles.cardImg} 
            />
        </div>
    )
}

export default Card