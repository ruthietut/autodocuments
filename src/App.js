import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import PricingPage from "./routes/PricingPage";
import ProcessDocument from "./routes/Renewal";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import DriversLicense from "./routes/DriversLicense";
import { ChakraProvider } from "@chakra-ui/react";
import vehicleCategoryPricing from "./routes/vehicleCategoryPricing";
import Renewal from "./routes/Renewal";
import Registration from "./routes/Registration";
import ChangeOwnership from "./routes/ChangeOwnership";
import OtherVehiclePermit from "./routes/OtherVehiclePermit";
import Contact from "./routes/Contact";
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PricingPage" element={<PricingPage />} />
        <Route path="/ProcessDocument" element={<ProcessDocument />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/vehicleCategoryPricing" element={< vehicleCategoryPricing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DriversLicense" element={<DriversLicense />} />
        <Route path="/Renewal" element={<Renewal />}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/ChangeOwnership" element={<ChangeOwnership/>}/>
        <Route path="/OtherVehiclePermit" element={<OtherVehiclePermit/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </ChakraProvider>
    //   <div>
    //     HOME PAGE
    //   </div>
  );
}

export default App;
