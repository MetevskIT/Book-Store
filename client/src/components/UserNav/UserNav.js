import { Link, NavLink } from 'react-router-dom';
import './UserNav.css'
import { useAuthContext } from '../../contexts/AuthContext';

function UserNav(){
    const { user } = useAuthContext();
    return(
        <nav className="user-nav">
        {
            user.email?
            <ul>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
        :
        <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
        }
    </nav>
    )
}

export default UserNav;