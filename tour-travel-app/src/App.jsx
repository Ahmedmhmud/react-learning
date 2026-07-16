import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Destination } from "./components/Destination";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />  
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="destination">
          <Destination />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;