import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scoreboard from "./pages/Scoreboard";
import PlayGame from "./pages/PlayGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayGame />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
