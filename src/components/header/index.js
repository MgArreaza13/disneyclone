import React from "react";
import { Nav, Logo, NavMenu, Login, UserImg } from "./styles";
import items from "./items";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../features/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

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

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            {items.map((item, index) => {
              return <NavItem item={item} key={index} />;
            })}
          </NavMenu>
          <UserImg src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  );
}

export default Header;
