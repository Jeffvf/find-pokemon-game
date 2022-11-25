export default function GameOver({time, restart}){
  return(
    <div id="modal">
      <div className="final-score">
        <h1>You finished in {time} seconds!</h1>
        <h2>Submit your score</h2>
        <div>
          <label htmlFor="name">Insert your name: </label>
          <input type="text" id="name" required></input>
        </div>
        <div className="final-score-options">
          <button className="restart-btn" onClick={() => restart()}>Restart</button>
          <button className="game-over-btn">Submit</button>
        </div>
      </div>
    </div>
  )
};