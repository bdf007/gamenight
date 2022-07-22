/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import Addgame from "@components/Addgame";
import GameTable from "@components/GameTable";
import Navbar from "@components/navbar";
// eslint-disable-next-line import/no-unresolved
import axios from "@services/axios";
import { useEffect, useState } from "react";
import { userContext } from "../contexts/UserContext";

export default function User() {
  const { state } = userContext();

  // eslint-disable-next-line no-unused-vars
  const [games, setGames] = useState([]);
  const [searchValue, setSearchValue] = useState();

  // useEffect(() => {
  //   axios.get("games").then((result) => setGame(result.data));
  // }, []);
  return (
    <div className="homePage">
      <Navbar />

      <div className="username">
        {!state.id ? (
          <p>non connecté</p>
        ) : (
          <>
            <p>Welcome in your GameNight List, {state.username}</p>
            <Addgame />
            <GameTable />
          </>
        )}
      </div>
    </div>
  );
}
