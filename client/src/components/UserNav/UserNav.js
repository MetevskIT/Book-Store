import { Link, NavLink } from 'react-router-dom';

function UserNav(){
    return(
        <nav className="user-nav">
        <ul>
            <li><NavLink className="a" to="/">Login</NavLink></li>
            <li><NavLink className="a" to="/">Register</NavLink></li>
        </ul>
    </nav>
    )
}

export default UserNav;