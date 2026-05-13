import { Link } from 'react-router-dom';

export default function Navbar(){
  return(

    <nav className ="flex justify-between px-6 py-4 bg-gray-500">

      <span>
        TN
      </span>

      <ul className = "flex gap-20">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="projects">Projects</Link>
      <Link to="resume">Resume/CV</Link>
      </ul>

    </nav>
  )
}