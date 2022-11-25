import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore"; 
import { useEffect, useState } from "react";

export default function Scoreboard({app}) {
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    let querySnapshot;
    async function fetchData(){
      const db = getFirestore(app.app);
      const q = query(collection(db, "scoreboard"), orderBy("time"));
      querySnapshot = await getDocs(q);
      const userData = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          username: doc.data().username,
          time: doc.data().time
        }

        userData.push(data)
      });
      setScoreboard(userData);
    }
    fetchData();

  });

  return(
    <div id="scoreboard">
      <h1>Scoreboard</h1>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((score, index) => {
            return(
              <tr key={score.id}>
                <td>{index + 1}</td>
                <td>{score.username}</td>
                <td>{score.time}s</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}