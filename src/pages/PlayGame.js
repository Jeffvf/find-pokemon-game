import { useState } from "react"
import StartGame from "../components/StartGame";
import Game from "../components/Game";

export default function PlayGame() {
  const [gameStart, setGameStart] = useState(0);

  function startGame() {
    setGameStart(1);
  }
  return(
    <div id="play-game">
      {!gameStart && <StartGame closeModal={startGame}/>}
      <Game />
    </div>
  )
}