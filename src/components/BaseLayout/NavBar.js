import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const NavBar = () => {
  let count = 1

  return <Menu>
    <Menu.Item><Icon 
      size="big" 
      name="bullseye" 
      onClick={() => alert(`W${"o".repeat(++count)}W`)}/>
    </Menu.Item>
    <Menu.Item><Link to='/'>Home</Link></Menu.Item>
    <Menu.Item><Link to='/converter'>Converter</Link></Menu.Item>
    <Menu.Item><Link to='/currencies'>Currencies</Link></Menu.Item>
  </Menu>
};

export default NavBar;