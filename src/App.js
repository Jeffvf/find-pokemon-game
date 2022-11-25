import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scoreboard from "./pages/Scoreboard";
import PlayGame from "./pages/PlayGame";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB6x84ueab6E9VGnjNJS35Sf_sO-_Iv2EY",
    authDomain: "find-character-game.firebaseapp.com",
    projectId: "find-character-game",
    storageBucket: "find-character-game.appspot.com",
    messagingSenderId: "720025025940",
    appId: "1:720025025940:web:aa302976b45ec2bd50a381"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayGame app={app}/>}></Route>
        <Route path="/scoreboard" element={<Scoreboard app={app}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
