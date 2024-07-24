import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"

function App() {
  return (
    <div className="mx-auto flex-grow scroll-smooth bg-gray-100">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
