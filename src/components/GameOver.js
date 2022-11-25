import {getFirestore, collection, addDoc} from "firebase/firestore";
import { useState } from "react";

export default function GameOver({time, restart, app}){
  const [name, setName] = useState("");

  const db = getFirestore(app.app);

  async function addData(){
    if(name !== ""){
      try{
        const docRef = await addDoc(collection(db, "scoreboard"), {
          name: {name},
          time: {time}
        })
      }
      catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return(
    <div id="modal">
      <div className="final-score">
        <h1>You finished in {time} seconds!</h1>
        <h2>Submit your score</h2>
        <div>
          <label htmlFor="name">Insert your name: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
        </div>
        <div className="final-score-options">
          <button className="restart-btn" onClick={() => restart()}>Restart</button>
          <button className="game-over-btn" onClick={() => addData()}>Submit</button>
        </div>
      </div>
    </div>
  )
};