import { useEffect, useState } from "react";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="container mx-auto bg-indigo-500 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Current Players : {players.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {players.map((player) => (
          <Player player={player} key={player.ID}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
