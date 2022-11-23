import { useState } from "react"
import img from "../assets/images/gameImage.jpeg"
import Menu from "./Menu";

export default function Game() {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [menu, setMenu] = useState(0);

  function updateCoordinates(ev) {
    const x = ev.pageX;
    const y = ev.pageY;
    setCoordinates([x, y]);

    changeMenuVisibility();
  }

  function changeMenuVisibility(){
    setMenu(!menu);
  }

  return(
    <div id="game">
      <img src={img} className="gameboard" onClick={updateCoordinates}></img>
      {menu && <Menu x = {coordinates[0]} y = {coordinates[1]} hide={updateCoordinates}/>}
    </div>
  )
}