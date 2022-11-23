import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scoreboard from "./pages/Scoreboard";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
