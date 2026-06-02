import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div id="nav">
            <div>
                <img className="logo" src="../img/yummy-logo.png" alt="Yummy app Logo" />
            </div>
            <nav className="nav-wrap">
                <Link className="nav-link" to ="/">Home</Link>
                <Link className="nav-link" to ="/about">About</Link>
                <Link className="nav-link" to ="/dashboard">Dashboard</Link>
            </nav>
        </div>
    )
}