// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import XO from "./components/XO";
import Counter from "./components/Counter";
import Shop from "./pages/shop";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/game1">Игра 1</NavLink>
          <NavLink to="/game2">Игра 2</NavLink>
          <NavLink to="/shop">Магазин</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/game1" element={<Game1></Game1>}></Route>
          <Route path="/game2" element={<Game2></Game2>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <XO />
      <Counter start={0} /> */}
    </div>
  );
}

export default App;
