import React from 'react'
import "./OpenedPile.css"

const OpenedPile = (props) => {
    //OVO CE DA SE OTVORI U NEKOM SRANJU PREKO OSTALIH SRANJA NA SAJTU
  if(props.visible === "invisible")return (<div className='invisible'></div>)
    return (
    <div className="opened-pile" >
        <div className="card-header">
            <img src = "../resources/settings.png" alt=""/>
            <div className="card-title">{props.title}</div>
        </div>
        <div className="card">
            <text className='card-description'>{props.description}</text>
            <div className="btn-flip">Okreni Karticu</div>
        </div>
        <div className="btn-draw">Izvuci Drugu Karticu</div>
    </div>
  )
}

export default OpenedPile