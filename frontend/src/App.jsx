import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Rankings from "./pages/Rankings";
import Comparison from "./pages/Comparison";
import Insights from "./pages/Insights";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
