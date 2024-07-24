import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-primary-color text-white px-4 py-5">
    <div className="container mx-auto w-[80%] flex justify-between items-center">
      <h1 className="text-2xl font-bold">Springdale Public School</h1>
      <nav className="font-normal text-base">
        <Link to="/" className="px-2">Home</Link>
        <Link to="/aboutus" className="px-2">About Us</Link>
        <Link to="/academics" className="px-2">Academics</Link>
        <Link to="/admissions" className="px-2">Admissions</Link>
        <Link to="/faculty" className="px-2">Faculty</Link>
        <Link to="/students" className="px-2">Students</Link>
        <Link to="/gallery" className="px-2">Gallery</Link>
        <Link to="/contact" className="px-2">Contact Us</Link>
      </nav>
    </div>
  </header>
  )
}

export default Header