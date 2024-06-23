import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import PortFolio from "./components/PortFolio";
import Main from "./components/Main";
import Information from "./components/Information";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Main />
                <Information />
              </>
            } 
          />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
    </>
  );
}

export default App;
