import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Home from "@pages/Home";
// eslint-disable-next-line import/no-unresolved
import Login from "@pages/Login";
// eslint-disable-next-line import/no-unresolved
import User from "@pages/User";
// eslint-disable-next-line import/no-unresolved
import RegisterUser from "@pages/RegisterUser";
import "./App.css";
// eslint-disable-next-line import/no-unresolved
import Search from "@pages/Search";
import { userContext } from "./contexts/UserContext";

function App() {
  const { state } = userContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/search" element={<Search />} />
        {state.id && (
          <>
            <Route path="/user" element={<User />} />
            <Route path="/game" element={<User />} />
          </>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
