import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
        <h1>Same blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </div>
  )
}
