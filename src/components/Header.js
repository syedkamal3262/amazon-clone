import React from "react";
import "./Header.css";
import Logo from "../images/amazon_PNG24.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../components/StateProvider";
import { auth } from "../Firebase.js";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt=""></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/Login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello,{user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Signout" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/Cart" className="header__link">
          <div className="header__ShoppingBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
