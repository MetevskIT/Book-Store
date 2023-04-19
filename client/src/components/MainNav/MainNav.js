import { Link, NavLink } from 'react-router-dom';
import './MainNav.css'

const MainNav = () => {
    return (
        <nav className="main-nav">
            <p className="nav-title">Book Store</p>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/categories">Categories</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNav;