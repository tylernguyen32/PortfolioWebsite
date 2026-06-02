import { Link } from 'react-router-dom';

export default function Navbar(){
  return(

    <nav className ="flex justify-between px-6 bg-white/30 py-4 backdrop-blur-lg rounded-full mx-2">

      <span>
        TN
      </span>

      <ul className = "flex gap-20">
      <Link to="/" className="text-lg hover:text-black">Home</Link>
      <Link to="/about" className="text-lg hover:text-black">About</Link>
      <Link to="projects" className="text-lg hover:text-black">Projects</Link>
      <Link to="resume" className="text-lg hover:text-black">Resume/CV</Link>
      </ul>

    </nav>
  )
}