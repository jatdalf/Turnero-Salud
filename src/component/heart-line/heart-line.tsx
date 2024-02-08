import styles from './heart-line.module.css'
import React from 'react'
interface HeartlineAttributes {
    className?: string,
}

export const Heartline: React.FC<HeartlineAttributes> = ({ className = '' }: HeartlineAttributes) => {
    return (
        <div>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 48 48`} >
            <path d="M 20.5 6 C 12.515556 6 6 [...] 10 20.5 10 z" />
            </svg>
            <div className={styles.heartrate}></div>
            <div className={styles.heartrate}></div>
        </div>
    );
}
