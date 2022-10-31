import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ShoppingCart } from "./components/ShoppingCart";
import Overlay from "./components/Overlay";

function App() {
  return (
    <ShoppingCartProvider>
      <Overlay />
      <NavBar />
      <div className="mt-20 mb-4 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

export default App;
