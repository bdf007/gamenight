/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import "@components/componentsCss/addgame.css";

function Addgame({ setGame }) {
  const [containt, setContaint] = useState("");

  console.warn(setGame);
  return (
    <div className="addgameComponent">
      <form className="formAddGame">
        {" "}
        <label className="inputAddGame" htmlFor="containt">
          Name
          <input
            className="inputAddGame"
            type="text"
            placeholder="Name of game"
            id="containt"
            // value="value"
            // onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <label className="inputAddGame" htmlFor="containt">
          number of player
          <input
            className="inputAddGame"
            type="texte"
            placeholder="1 to 99"
            id="containt"
            // onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <br />
        <label className="inputAddGame" htmlFor="containt">
          gameplay Style
          <input
            className="inputAddGame"
            type="text"
            placeholder="cardsGame, placement game..."
            id="containt"
            // value="value"
            // onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <label className="inputAddGame" htmlFor="containt">
          Editor
          <input
            className="inputAddGame"
            type="text"
            placeholder="editor..."
            id="containt"
            // value="value"
            // onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <label className="inputAddGame" htmlFor="containt">
          Ages
          <input
            className="inputAddGame"
            type="text"
            placeholder="from 1 to 99"
            id="containt"
            // value="value"
            // onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <br />
        <label className="inputAddGame" htmlFor="containt">
          duration
          <input
            className="inputAddGame"
            type="text"
            placeholder="1min to 99h"
            id="containt"
            // value="value"
            // onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <br />
        <label className="inputAddGame" htmlFor="file">
          <input
            className="inputAddGame"
            type="file"
            id="file"
            // onChange={(e) => handleFileChange(e)}
          />
        </label>
        <button className="inputAddGame" type="submit">
          Add Game to Your list and to our database
        </button>
      </form>
      {/* {fileOverview != null ? <img src={fileOverview} alt="preview" /> : " "} */}
    </div>
  );
}

export default Addgame;
