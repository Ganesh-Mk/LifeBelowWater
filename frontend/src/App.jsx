import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Entrance from "./pages/Entrance";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Entrance />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
