import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`bg-primary-color text-white px-4 py-5 ${isOpen ? '' : ''}`} >
      <div className={`container mx-auto w-[80%] flex justify-between items-center ${isOpen?"flex-col h-full":""} `}>
        <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold ${isOpen?"hidden":""}`}>Springdale Public School</h1>
        <button 
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className={`font-normal text-base ${isOpen ? 'block' : 'hidden'} md:flex items-center`}>
          <Link to="/" className="block md:inline-block px-2 py-1">Home</Link>
          <Link to="/aboutus" className="block md:inline-block px-2 py-1">About Us</Link>
          <Link to="/academics" className="block md:inline-block px-2 py-1">Academics</Link>
          <Link to="/admissions" className="block md:inline-block px-2 py-1">Admissions</Link>
          <Link to="/faculty" className="block md:inline-block px-2 py-1">Faculty</Link>
          <Link to="/students" className="block md:inline-block px-2 py-1">Students</Link>
          <Link to="/gallery" className="block md:inline-block px-2 py-1">Gallery</Link>
          <Link to="/contact" className="block md:inline-block px-2 py-1">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
