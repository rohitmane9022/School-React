import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"
import Academics from "./Pages/Acadamicts";
import Admissions from "./Pages/Admissions";
import Faculty from "./Pages/Faculty";
import Students from "./Pages/Students";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="mx-auto flex-grow scroll-smooth bg-gray-100">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/aboutus" element={<AboutUs/>}/>
        <Route  path="/academics" element={<Academics/>}/>
        <Route  path="/admissions" element={<Admissions/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
