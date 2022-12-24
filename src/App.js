import { Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./Navbar";
import Theater from "./components/Theater";
import TicketCount from "./components/TicketCount";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/theater" element={<Theater />} />
        <Route path="/ticket-counter" element={<TicketCount />} />
      </Routes>
    </div>
  );
};

export default App;
