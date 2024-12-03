import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import DashboardUser from "./pages/DashboardUser";
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
      </Routes>
    </>
  )
}

export default App
