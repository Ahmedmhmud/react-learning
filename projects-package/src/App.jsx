import "./App.css";
import Accordian from "./components/accordian";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {
  return (
    <div className="App">
      <Accordian />
      <QRCodeGenerator />
      <ScrollToSection />
    </div>
  );
}

export default App;