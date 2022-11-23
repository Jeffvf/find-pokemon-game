import { useEffect, useState } from "react"
import StartGame from "../components/StartGame";
import Game from "../components/Game";

export default function PlayGame() {
  const pokemonCoords = [
    {
      "name": "Articuno",
      "x_min": "572",
      "x_max": "726",
      "y_min": "3590",
      "y_max": "3647"
    },
    {
      "name": "Palkia",
      "x_min": "385",
      "x_max": "553",
      "y_min": "2633",
      "y_max": "2775"
    },
    {
      "name": "Solgaleo",
      "x_min": "138",
      "x_max": "260",
      "y_min": "861",
      "y_max": "995"
    }
  ]
  const [gameStart, setGameStart] = useState(0);
  const [toFind, setToFind] = useState(pokemonCoords);

  useEffect(() => {
    if(toFind.length == 0){
      console.log('hey');
    }
  }, [toFind]);

  function removePokemon(name){
    setToFind(toFind.filter((pokemon) => {return pokemon.name != name}));
  }

  function startGame() {
    setGameStart(1);
  }
  return(
    <div id="play-game">
      {!gameStart && <StartGame closeModal={startGame}/>}
      <Game pokemonCoords={toFind} removeFoundItem={removePokemon}/>
    </div>
  )
}