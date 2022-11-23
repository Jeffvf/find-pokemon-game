export default function Menu({x, y, hide}){
  return(
    <div id="menu" style={{top:`${y}px`, left:`${x}px`}} onClick={hide}>
      <div onClick={(ev) => console.log(ev.target.textContent)}>Articuno</div>
      <div>Palkia</div>
      <div>Solgaleo</div>
    </div>
  )
}