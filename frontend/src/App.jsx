import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workers from "./pages/Workers";
import Profile from "./pages/Profile";

function App() {
  return (

    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/workers" element={<Workers />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </div>

  );
}

export default App;