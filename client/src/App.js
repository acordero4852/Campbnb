import Landing from "./pages/Landing";
import Listings from "./pages/Listings";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/Listings" element={<Listings />} />
      </Routes>
    </div>
  );
}

export default App;
