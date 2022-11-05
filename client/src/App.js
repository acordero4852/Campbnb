import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Listings from "./pages/Listings";
import ListingInfo from "./pages/ListingInfo";
import { AuthContextProvider } from "./contexts/auth";
function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listing/*" element={<ListingInfo />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
