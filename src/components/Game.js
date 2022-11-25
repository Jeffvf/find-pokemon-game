import { useState } from "react"
import boardImg from "../assets/images/gameImage.jpeg"
import Menu from "./Menu";

export default function Game({pokemonCoords, removeFoundItem}) {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [menu, setMenu] = useState(0);
  const [isCorrect, setIsCorrect] = useState(0);

  function updateCoordinates(ev) {
    const img = document.getElementsByClassName('gameboard')[0];
    const height = img.height;
    const width = img.width;
    const boundingBox = img.getBoundingClientRect();
    const x = ev.clientX;
    const y = ev.clientY;

    const coordX = (x - boundingBox.left) * (width / boundingBox.width);
    const coordY = (y - boundingBox.top) * (height / boundingBox.height);

    console.log(coordX, coordY);
    setCoordinates([coordX, coordY]);

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
      <img src={boardImg} className="gameboard" onClick={updateCoordinates}></img>
      {menu && <Menu x = {coordinates[0]} y = {coordinates[1]} hide={changeMenuVisibility} choice={compareCoords} elements={pokemonCoords}/>}
      {isCorrect == 1 && <div className="correct-guess">You found it!</div>}
      {isCorrect == -1 && <div className="wrong-guess">It's not there</div>}
    </div>
  )
}