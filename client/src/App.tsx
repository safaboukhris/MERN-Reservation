import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import DashboardUser from "./pages/DashboardUser";
import Bureau from "./pages/Bureau";
import CoworkingReservation from "./pages/CoworkingReservation";
import Salle from "./pages/Salle";
import Reception from "./pages/Reception";
import "./index.css"


function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/signin" element={<Login />}/>
        <Route  path="/signup" element={<Register/>}/>
        <Route  path="/about"  element={<About/>}/>
        <Route path="/dashboard" element={<DashboardUser/>}/>
        <Route path="/dashboard/office" element={<Bureau/>}/>
        <Route path="/dashboard/coworking" element={<CoworkingReservation/>}/>
        <Route path="/dashboard/meeting" element={<Salle/>}/>
        <Route path="/dashboard/reception" element={<Reception/>}/>
      </Routes>
    </>
  )
}

export default App
