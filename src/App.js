import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import ProcessDocument from "./routes/Renewal";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/ProcessDocument" element={<ProcessDocument />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    //   <div>
    //     HOME PAGE
    //   </div>
  );
}

export default App;
