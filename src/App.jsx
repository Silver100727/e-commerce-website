import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home";
import Navbar from "./Component/Navbar";
import Shop from "./Layout/Shop";
import AuthPage from "./Layout/AuthPage";
import Checkout from "./Layout/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="authentication" element={<AuthPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
