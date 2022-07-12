//React Router Dom
import { Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" component={About} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="contact" component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
