/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import "@components/componentsCss/cardGame.css";

// eslint-disable-next-line react/prop-types
function CardGame({ data }) {
  return !data ? (
    <p>Loading...</p>
  ) : (
    <div className="cardsGames">
      <figure className="cardsfigure">
        <img id="cardImg" src={data.thumb_url} alt={data.handle} />
      </figure>
      <div className="infos">
        <h2>{data.name}</h2>
        <div
          className="divMerde"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
}
// function CardGame({ setData }) {
//   return (
//     <div>
//       <ul id="cardGame">
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//         <li>
//           <div>
//             <p>GAME NAME</p>
//             <h1>GAME IMAGE</h1>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default CardGame;
