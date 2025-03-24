import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Navbar.css';

function Navbar() {
    const isActiveStyle = { textDecoration: 'underline' };

    const menuItems = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "À propos" },
    ];

    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to} style={({ isActive }) => isActive ? isActiveStyle : undefined}>
                {label}
            </NavLink>
        </li>
    );

    return (
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt="Kasa" />
            </Link>
            <nav>
                <ul>
                    {menuItems.map(menuItem)}
                </ul>
            </nav>
        </div>
    )


}

export default Navbar;