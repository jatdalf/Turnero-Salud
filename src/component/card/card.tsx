import styles from './card.module.css'
import circuloAmarillo from '../../assets/CirculoAmarillo.png'
import circuloVerde from '../../assets/CirculoVerde.png'

type cardProps = {
    key:number;
}


const Card = (props: cardProps) =>{     
    const cardKey: number = props.key



    return(
        <div className={styles.cardContainer}>
            <img             
                src={circuloVerde}
                className={styles.cardImg} 
            />           
            <p className={styles.cardText} >
                10:30
            </p>
            
        </div>
    )
}

export default Card