import React from 'react'
import "./OpenedPile.css"

const OpenedPile = (props) => {
    //OVO CE DA SE OTVORI U NEKOM SRANJU PREKO OSTALIH SRANJA NA SAJTU
  if(props.visible === "invisible")return (<div className='invisible'></div>)
    return (
    <div className="opened-pile" >
        <div className="cards-header">
            <img src = "../resources/settings.png" alt=""/>
            <div className="cards-title">{props.title}</div>
        </div>
        <div className="card">
            <div className='card-text'>{props.description}</div>
        </div>
        <div className="buttons">
            <div className="btn-flip">Okreni Karticu</div>
            <div className="btn-draw">Izvuci Drugu Karticu</div>
        </div>
    </div>
  )
}

export default OpenedPile