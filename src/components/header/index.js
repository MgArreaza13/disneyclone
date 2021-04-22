import React from "react";
import { Nav, Logo, NavMenu, Login } from "./styles";
import items from "./items";
import {auth, provider} from '../../firebase'


function Header() {



  const handleAuth = () => {
    auth.signInWithPopup(provider).then((result => {
      console.log(result);
    })).catch((error) => {
      console.log(error)
    })
  }



  const NavItem = ({ item, key }) => {
    return (
      <a href={item.href}>
        <img src={item.src} alt={item.alt} id={key} />
        <span>{item.name}</span>
      </a>
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg" alt="logo" />
      </Logo>
      <NavMenu>
        {items.map((item, index) => {
          return <NavItem item={item} key={index} />;
        })}
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
}

export default Header;
