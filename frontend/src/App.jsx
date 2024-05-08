import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Entrance from "./pages/Entrance";
import { Home } from "./pages/Home";
import Community from "./pages/Community";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
=        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
