import React from 'react'
import styles from './card.module.css'

function Card({data, deleteCard}) {
    
    return (
        <div className = {styles.card}>
            <div className = {styles.card__details}>
                <div className = {styles.card__dataDiv}>{data}</div>
                <button onClick = {() => deleteCard(data)} className = {styles.card__button}>Delete</button>
            </div>
        </div>
    )
}

export default Card
