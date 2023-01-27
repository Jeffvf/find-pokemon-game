import img from "../assets/images/gameImage.jpeg"
import articunoImg from "../assets/images/articuno.png"
import palkiaImg from "../assets/images/palkia.png"
import solgaleoImg from "../assets/images/solgaleo.png"
import pokemonLogo from "../assets/images/pokemon-logo.png"

export default function StartGame({closeModal}) {
  return(
    <div id="modal">
      <img src={pokemonLogo} style={{height: "auto", height: "50px"}}></img>
      <div className="modal-content">
        <div className="preview">
        </div>
        <div className="game-info">
          <h3>Find these Pokemon:</h3>
          <div className="pokemon-to-find">
            <img src={articunoImg} className="pokemon-image"></img>
            <span className="pokemon-name">Articuno</span>
          </div>
          <div className="pokemon-to-find">
            <img src={palkiaImg} className="pokemon-image"></img>
            <span className="pokemon-name">Palkia</span>
          </div>
          <div className="pokemon-to-find">
            <img src={solgaleoImg} className="pokemon-image"></img>
            <span className="pokemon-name">Solgaleo</span>
          </div>
          <button className="game-start-btn" onClick={closeModal}>START</button>
        </div>
      </div>
    </div>
  )
}