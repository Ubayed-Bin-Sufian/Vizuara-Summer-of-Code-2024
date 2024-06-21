import { NavLink } from "react-router-dom"  // Navlink is a component which understands whether a component is active or not 

export const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>
                Home
            </NavLink>
            <NavLink style={navLinkStyles} to='/about'>
                About
            </NavLink>
        </nav>
    )
}