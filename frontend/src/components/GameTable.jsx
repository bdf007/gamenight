/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/order
import AddImage from "./addImages";
import "./componentsCss/gametable.css";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import axios from "@services/axios";
import SearchBar from "./SearchBar";

export default function GameTable() {
  const [games, setGames] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getGames = async () => {
    try {
      const { data } = await axios.get("game", { withCredentials: true });
      setGames(data);
    } catch (err) {
      console.error(err.response.status);
      if (err.response.status === 401) {
        alert("You're not authenticated");
      } else if (err.response.status === 403) {
        alert("You're not authorized");
      }
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  return (
    <section id="userListGame">
      {games.length ? (
        <>
          <SearchBar setSearchValue={setSearchValue} />
          <table>
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>player Number</td>
                <td>gameplay style</td>
                <td>editor</td>
                <td>ages</td>
                <td>duration</td>
                <td>photos</td>
                <td>Add Photo</td>
              </tr>
            </thead>

            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.name}</td>
                <td>{game.playerNumber}</td>
                <td>{game.gameplayStyle}</td>
                <td>{game.editor}</td>
                <td>{game.ages}</td>
                <td>{game.duration}</td>
                <td> photo </td>
                <td>
                  <AddImage />
                </td>
              </tr>
            ))}
          </table>
        </>
      ) : (
        <h2>No Data to display</h2>
      )}
    </section>
    // <div>
    //   <SearchBar />
    //   <table>
    //     <tr>
    //       <td>id</td>
    //       <td>name</td>
    //       <td>player Number</td>
    //       <td>gameplay style</td>
    //       <td>editor</td>
    //       <td>ages</td>
    //       <td>duration</td>
    //       <td>Add Photo</td>
    //     </tr>
    //     <tr>
    //       <td>1</td>
    //       <td>Monopoly</td>
    //       <td>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
    //         reiciendis iure cupiditate eveniet nulla harum aliquid sapiente
    //         totam commodi eum fugiat, quod unde deserunt possimus itaque magni
    //         dolorum, magnam dolor amet repudiandae quos tenetur earum. Soluta ex
    //         vel sapiente alias saepe nobis exercitationem excepturi dolorum!
    //         Minima quo voluptatum laborum architecto deserunt quas beatae
    //         pariatur? Recusandae beatae aut iure nobis facere iste praesentium,
    //         corrupti, vero neque delectus minus ea earum sunt voluptatem dolore
    //         maxime similique, ratione nihil nemo deserunt quod a eligendi
    //         repudiandae? Aliquid qui a maiores culpa architecto. Explicabo
    //         aspernatur eos vero ratione eius commodi necessitatibus maxime
    //         placeat doloribus. Aliquam magnam doloribus aperiam cum excepturi,
    //         aliquid nihil minima laboriosam nemo, hic facilis architecto! Modi,
    //         reiciendis esse! Laboriosam deleniti blanditiis eum velit, laborum
    //         voluptatibus veniam praesentium voluptatem doloremque eligendi
    //         aspernatur accusantium fugiat dolorum libero minima quis illo
    //         mollitia aut temporibus impedit tempora necessitatibus non!
    //         Reiciendis tempore officia fuga maiores aliquam harum.
    //       </td>
    //       <td>
    //         {" "}
    //         <div id="gameCards">
    //           {/* {!} */}
    //           {!games[0] ? (
    //             <p>Empty list</p>
    //           ) : (
    //             <ul>
    //               {games.map((game) => {
    //                 return (
    //                   <li key={game.id}>
    //                     <img
    //                       src={`${import.meta.env.VITE_IMAGES_URL}/${
    //                         game.name
    //                       }`}
    //                       alt={game.name}
    //                     />
    //                     <p>{game.editor}</p>
    //                     {/* <button
    //                     type="button"
    //                     onClick={() =>
    //                       axios
    //                         .delete(`game/${game.id}`)
    //                         .then(() => console.warn("Delete Items"))
    //                     }
    //                   >
    //                     Delete
    //                   </button> */}
    //                   </li>
    //                 );
    //               })}
    //             </ul>
    //           )}
    //         </div>
    //       </td>
    //       <td>year</td>
    //       <td>duration</td>
    //       <td>age</td>
    //       <td>
    //         {" "}
    //         <AddImage />{" "}
    //       </td>
    //     </tr>
    //   </table>
    // </div>
  );
}
