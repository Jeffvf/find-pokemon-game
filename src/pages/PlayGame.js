import { useEffect, useState } from "react"
import StartGame from "../components/StartGame";
import Game from "../components/Game";
import GameOver from "../components/GameOver";

export default function PlayGame(app) {
  const pokemonCoords = [
    {
      "name": "Articuno",
      "x_min": "646.5",
      "x_max": "767.5",
      "y_min": "3590",
      "y_max": "3647"
    },
    {
      "name": "Palkia",
      "x_min": "447.5",
      "x_max": "615.5",
      "y_min": "2633",
      "y_max": "2775"
    },
    {
      "name": "Solgaleo",
      "x_min": "212.5",
      "x_max": "322.5",
      "y_min": "862",
      "y_max": "1010"
    }
  ]
  const [gameStart, setGameStart] = useState(0);
  const [gameOver, setGameOver] = useState(0);
  const [toFind, setToFind] = useState(pokemonCoords);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(toFind.length === 0){
      setGameOver(1);
    }
  }, [toFind]);

  useEffect(() => {
    if(gameStart && !gameOver){
      setTimeout(() => {
        setCounter(counter + 1)
      }, 1000);
    }
  });

  function restartGame(){
    setGameStart(0);
    setGameOver(0);
    setToFind(pokemonCoords);
    setCounter(0);
  }

  function removePokemon(name){
    setToFind(toFind.filter((pokemon) => {return pokemon.name !== name}));
  }

  function startGame() {
    setGameStart(1);
  }

  return(
    <div id="play-game">
      <div className="game-progress">
        <h1 className="quantity">Restam {toFind.length}</h1>
        <h1>Tempo: {counter}s</h1>
      </div>
      {!gameStart && <StartGame closeModal={startGame}/>}
      <Game pokemonCoords={toFind} removeFoundItem={removePokemon}/>
      {gameOver==1 && <GameOver time={counter} restart={restartGame} app={app}/>}
    </div>
  )
}