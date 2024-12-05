import React from 'react'
import "./Pile.css"
import OpenedPile from './OpenedPile'

const Pile = (props) => {

    const OpenPile = () =>{
        //OVDE TREBA POVUCI KARTICE ZA OVAJ SPIL I OTVORITI EKRAN ZA NJEGA
        
    }

    return (
    <>
    <div className="pile" onClick={OpenPile}>
        <div className="pile-name">{props.name}</div>
        <div className="separation"></div>
        <div className="pile-description">{props.description}</div>
    </div>
    <OpenedPile visible = "visible"></OpenedPile>
    </>
  )
}

export default Pile