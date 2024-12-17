import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reservations from "./pages/Reservations";
import DetailEspace from "./pages/DetailEspace";
import Dashboard from "./admin/pages/Dashboard";
import "./index.css"
import UsersList from "./admin/pages/UsersList";
import BookingList from "./admin/pages/BookingList";
import RoomList from "./admin/pages/RoomList";






function App() {

  return (
    <>
      <Routes>
      {/* Routes utilisateur */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/history" element={<Reservations />} />
      <Route path="/detail" element={<DetailEspace />} />

      {/* Routes admin avec layout */}
      <Route path="/admin" element={<Dashboard />}>
        <Route path="users" element={<UsersList/>} />
        <Route  path="booking" element={<BookingList/>} />
        <Route  path="space"  element={<RoomList/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
