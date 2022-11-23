import { useState } from "react"
import img from "../assets/images/gameImage.jpeg"
import Menu from "./Menu";

export default function Game({pokemonCoords, removeFoundItem}) {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [menu, setMenu] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);

  function updateCoordinates(ev) {
    const x = ev.pageX;
    const y = ev.pageY;
    setCoordinates([x, y]);

    changeMenuVisibility();
  }

  function changeMenuVisibility(){
    setMenu(!menu);
  }

  function compareCoords(pokemonName){
    const pokemon = pokemonCoords.filter((pokemon) => {
      return pokemon.name == pokemonName;
    })[0]

    const [name, x_min, x_max, y_min, y_max] = Object.values(pokemon)

    const [currentX, currentY] = coordinates;
    
    const isXCorrect = x_min < currentX && currentX < x_max;
    const isYCorrect = y_min < currentY && currentY < y_max;

    if(isXCorrect && isYCorrect){
      setIsCorrect(1);
      removeFoundItem(name);
    }
    else setIsCorrect(-1);

    setTimeout(() => setIsCorrect(0), 3000);
  }

  return(
    <div id="game">
      <img src={img} className="gameboard" onClick={updateCoordinates}></img>
      {menu && <Menu x = {coordinates[0]} y = {coordinates[1]} hide={changeMenuVisibility} choice={compareCoords} elements={pokemonCoords}/>}
      {isCorrect == 1 && <div className="correct-guess">You found it!</div>}
      {isCorrect == -1 && <div className="wrong-guess">It's not there</div>}
    </div>
  )
}