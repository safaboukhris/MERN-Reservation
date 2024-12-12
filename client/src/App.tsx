import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reservations from "./pages/Reservations";
import DetailEspace from "./pages/DetailEspace";
import "./index.css"
import Dashboard from "./admin/pages/Dashboard";




function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/signin" element={<Login />} />
        <Route  path="/signup" element={<Register/>} />
        <Route  path="/history" element={<Reservations/>} />
        <Route  path="/detail" element={<DetailEspace/>} />
        <Route  path="/admin/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
