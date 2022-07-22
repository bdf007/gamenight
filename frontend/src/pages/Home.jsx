// eslint-disable-next-line import/no-unresolved
import Appel from "@components/Appel";
// eslint-disable-next-line import/no-unresolved
import Navbar from "@components/navbar";

export default function Home() {
  return (
    <div className="homePage">
      {/* <header className="App-header"> */}
      <Navbar />
      {/* </header> */}
      <div className="homeAppel">
        <h1>Welcome To Your Game Night Helper</h1>
        <Appel />
      </div>
    </div>
  );
}
