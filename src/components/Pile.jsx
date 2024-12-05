import React, { useState } from 'react'
import "./Pile.css"
import OpenedPile from './OpenedPile'

const Pile = (props) => {
const cards = [];
    const [visible,setVisible] = useState('invisible');
    const handleSetVisible = () => {
        if(visible==='invisible')setVisible('visible');
        else setVisible('invisible');
    }
    return (
    <>
    <div className="pile" onClick={handleSetVisible}>
        <div className="pile-name">{props.name}</div>
        <div className="separation"></div>
        <div className="pile-description">{props.description}</div>
    </div>
    <OpenedPile visible = {visible} title = "Drugi Svetski Rat" description = "Najgora Lekcija"></OpenedPile>
    </>
  )
}

export default Pile