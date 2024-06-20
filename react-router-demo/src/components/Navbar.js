import { NavLink } from "react-router-dom"  // Navlink is a component which understands whether a component is active or not 

export const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    )
}