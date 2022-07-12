//React Router Dom
import { Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
//
function App() 
{
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
