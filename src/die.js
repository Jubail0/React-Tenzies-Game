import React from 'react'


export default function Die(props){


let styles ={
    backgroundColor:props.isHeld? "#59E391":"#FFFFFF"
}
    return (
        <div style ={styles} onClick ={props.holdDice}className='numbers'>
            <h2>{props.value}</h2>
        </div>
    )
}