import React from "react";
import { Nav, Logo, NavMenu, Login } from "./styles";

function Header() {
  const items = [
    {
      href: "home",
      src: "/images/home-icon.svg",
      alt: "HOME",
      name: "HOME",
    },
    {
      href: "home",
      src: "/images/search-icon.svg",
      alt: "SEARCH",
      name: "SEARCH",
    },
    {
      href: "home",
      src: "/images/watchlist-icon.svg",
      alt: "WATCHLIST",
      name: "WATCHLIST",
    },
    {
      href: "home",
      src: "/images/original-icon.svg",
      alt: "ORIGINALS",
      name: "ORIGINALS",
    },
    {
      href: "home",
      src: "/images/movie-icon.svg",
      alt: "MOVIES",
      name: "MOVIES",
    },
    {
      href: "home",
      src: "/images/series-icon.svg",
      alt: "SERIES",
      name: "SERIES",
    },
  ];

  const NavItem = ({item, key}) => {
    return (
      <a href={item.href}>
        <img src={item.src} alt={item.alt} id={key}/>
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
      <Login>Login</Login>
    </Nav>
  );
}

export default Header;
