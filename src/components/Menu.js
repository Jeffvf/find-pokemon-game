export default function Menu({x, y, hide, choice, elements}){
  return(
    <div id="menu" style={{top:`${y}px`, left:`${x}px`}} onClick={hide}>
      {elements.map((el) => {
        return(
          <div key={el.name} onClick={(ev) => choice(ev.target.textContent)}>{el.name}</div>
        )
      })}
    </div>
  )
}