import React, { useEffect, useState } from "react";
import "./OpenedPile.css";
import { fetchGetCardGroups } from "../util/fetchUtil";
import { getCookie } from "../util/cookieUtil";

const OpenedPile = (props) => {
  //OVO CE DA SE OTVORI U NEKOM SRANJU PREKO OSTALIH SRANJA NA SAJTU

  //const cards = fetchGetCardGroups(props.groupId, getCookie('access-token'));
  const cards = [{pitanje:"ko je kralj petar prvi", odgovor:"kralj"},{pitanje:"ko je petar prvi", odgovor:"car"}];

  const [cardText,setCardText] = useState("");
  const [index,setIndex] = useState(0);
  const [cardOrientation,setCardOrientation] = useState(true);
  
  useEffect(() => {
    console.log('Index changed:', index);
    // You can perform any side effects or logic here when index changes
  }, [setCardText]);

  const handleChangeCardOrientation = ()=>{
    setCardOrientation(()=>!cardOrientation);
    setCardText(()=>{return cardOrientation?cards[index].pitanje:cards[index].odgovor});
  }
  const handleDrawCard = ()=>{
    setIndex(()=>Math.floor(Math.random()* cards.length))
    setCardOrientation(()=>false);
    setCardText(() => cards[index].pitanje)

  }


  if (props.visible === "invisible") return <div className="invisible"></div>;
  return (
    <div className="opened-pile">
      <div className="cards-header">
        <img src="../resources/settings.png" alt="" />
        <div className="cards-title">{props.title}</div>
      </div>
      <div className="card">
        <div className="card-text">{cardText}</div>
      </div>
      <div className="buttons">
        <div className="btn-flip" onClick={handleChangeCardOrientation}>Okreni Karticu</div>
        <div className="btn-draw" onClick={handleDrawCard}>Izvuci Drugu Karticu</div>
      </div>
    </div>
  );
};

export default OpenedPile;
