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
import History from "./pages/History";
import "./index.css"
import Room from "./pages/Room";



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
        <Route path="/dashboard/history" element={<History/>}/>
        <Route path="/room" element={<Room/>}/>
      </Routes>
    </>
  )
}

export default App
