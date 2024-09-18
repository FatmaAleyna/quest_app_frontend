import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
       <Route exact path="/users/:userId" element={<User />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
