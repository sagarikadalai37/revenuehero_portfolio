import React from "react";
import Navbar from './components/Header/header';
import About from "./components/Hero/hero";
import Details from "./components/Details/details";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
    <Navbar />
    <About />
    <Details />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
