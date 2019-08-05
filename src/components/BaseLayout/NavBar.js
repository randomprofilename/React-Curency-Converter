import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => (
    <Menu>
        <Menu.Item>React Example</Menu.Item>
        <Menu.Item><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item><Link to='/converter'>Converter</Link></Menu.Item>
        <Menu.Item><Link to='/currencies'>Currencies</Link></Menu.Item>
    </Menu>
);

export default NavBar;