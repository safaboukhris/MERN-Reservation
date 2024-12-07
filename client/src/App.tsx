import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reservations from "./pages/Reservations";
import DetailEspace from "./pages/DetailEspace";
import "./index.css"



function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/signin" element={<Login />}/>
        <Route  path="/signup" element={<Register/>}/>
        <Route path="/history" element={<Reservations/>}/>
        <Route path="/detail" element={<DetailEspace/>}/>
      </Routes>
    </>
  )
}

export default App
