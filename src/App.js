import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BirdsAnimation from "./components/BirdsAnimation";
import RadioWidget from "./components/RadioWidget";

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <HomePage />

      <Footer />

      <BirdsAnimation />

      <RadioWidget />
    </div>
  );
}

export default App;
