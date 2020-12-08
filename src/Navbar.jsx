import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to="/">About</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact"> Contact</NavLink>
        </>
    );
};

export default Navbar;