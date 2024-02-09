import styles from './heart-line.module.css'
import React from 'react'
interface HeartlineAttributes {
    className?: string,
}

const Heartline: React.FC<HeartlineAttributes> = ({ className = '' }: HeartlineAttributes) => {
    return (
        <div>
          <svg className={styles.heartrate} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 150 73`} >
             <polyline fill="none" stroke="#009B9E" stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"/>
          </svg>
          <div className={styles.fadeIn}></div>
          <div className={styles.fadeOut}></div>
        </div>
    );
}

export default Heartline