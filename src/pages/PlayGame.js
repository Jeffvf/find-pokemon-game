import { useEffect, useState } from "react"
import StartGame from "../components/StartGame";
import Game from "../components/Game";

export default function PlayGame() {
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
  const [toFind, setToFind] = useState(pokemonCoords);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(toFind.length == 0){
      console.log('hey');
    }
  }, [toFind]);

  useEffect(() => {
    if(gameStart && toFind.length > 0){
      setTimeout(() => {
        setCounter(counter + 1)
      }, 1000);
    }
  });

  function removePokemon(name){
    setToFind(toFind.filter((pokemon) => {return pokemon.name != name}));
  }

  function startGame() {
    setGameStart(1);
  }
  return(
    <div id="play-game">
      <div className="game-progress">
        <h1 className="quantity">{toFind.length}</h1>
        <h1>{counter}</h1>
      </div>
      {!gameStart && <StartGame closeModal={startGame}/>}
      <Game pokemonCoords={toFind} removeFoundItem={removePokemon}/>
    </div>
  )
}