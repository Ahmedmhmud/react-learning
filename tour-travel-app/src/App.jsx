import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
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

        <div>
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;