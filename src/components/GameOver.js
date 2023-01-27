import {getFirestore, collection, addDoc} from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function GameOver({time, restart, app}){
  const [name, setName] = useState("");

  const db = getFirestore(app.app);

  async function addData(e){
    if(name !== ""){
      const data = {
        username: name,
        time: time
      }
      try{
        await addDoc(collection(db, "scoreboard"), data)
      }
      catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    else{
      e.preventDefault();
    }
  }

  return(
    <div id="modal">
      <div className="final-score">
        <h1>Você encontrou todos em {time} segundos!</h1>
        <h2>Registre sua pontuação</h2>
        <div>
          <label htmlFor="name">Insira seu nome: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
        </div>
        <div className="final-score-options">
          <button className="restart-btn" onClick={() => restart()}>Tentar novamente</button>
          <Link to="/scoreboard"><button className="game-over-btn" onClick={(e) => addData(e)}>Registrar</button></Link>
        </div>
      </div>
    </div>
  )
};