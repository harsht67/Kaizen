import "./Header.scss";

import { CiUser } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="header">

      <h1 className="header__logo">
        <Link to="/">Kaizen</Link>
      </h1>

      <div className="header__nav">
        <Navigation />
      </div>

      <div className="header__options">
        <CiUser className="header__user-button" />
        <SlBag className="header__cart-button" />
        <RxHamburgerMenu className="header__menu-button" />
      </div>

    </header>
  )
}
