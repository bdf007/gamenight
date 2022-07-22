/* eslint-disable import/no-unresolved */
import CardGame from "@components/CardGame";
import Navbar from "@components/navbar";
import SearchBar from "@components/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [data, setData] = useState();

  const searchGame = async () => {
    await axios
      .get("https://api.boardgameatlas.com/api/search?client_id=073Uwaw73T")
      .then((res) => {
        // const games = res.data;

        // console.log(res.data);
        return setData(res.data);
      });
  };

  useEffect(() => {
    searchGame();
  }, []);

  const [searchValue, setSearchValue] = useState();

  return (
    <div className="homePage">
      <Navbar />
      <h1>GAMENIGHT SEARCHPAGE</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {data && <CardGame data={data.games[0]} />}
    </div>
  );
}
