import React from 'react'
import './Main.css'
import Pile from './Pile';

const Main = (props) => {
    //U PROPSU TREBA DA STOJI USERNAME, ID i PILES
    //KROZ PILES ITERIRATI TAKO DA BI SE SVI ISPISALI

    //NE ZNAM ZASTO SLIKE NECE DA SE ISPISU MAMU IM JEBEM
  return (
    <>
    <div className="header">
        <div className="search">
            <img src="../resources/search.png" alt="" />
            <input type="text" />
        </div>
        <div className="profile-info">
            <text>{props.username}</text>
            <img src="../resources/logout.png" alt="" />
        </div>
    </div>
    <div className="piles">
        <Pile id = {1} name="drugi svetski rat" description="najgora lekcija iz istorije"></Pile>
    </div>
    </>
  )
}

export default Main