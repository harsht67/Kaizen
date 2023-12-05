import "./Header.scss";

import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(prev => !prev);
  }

  return (
    <header className="header">

      <RxHamburgerMenu className="header__menu-button" onClick={toggleMenu} />

      <h1 className="header__logo">
        <Link to="/">Kaizen</Link>
      </h1>

      <div className="header__nav">
        <Navigation />
      </div>

      <div className="header__options">
        
        <CiUser className="header__user-button" />
    
        <SlBag className="header__cart-button" />
    
      </div>

      <aside className={`header__menu ${menu && 'header__menu--open'}`}>
        <div className="menu">
          <IoCloseOutline className="menu__close-button" onClick={toggleMenu} />
          <div className="menu__content">
            <Navigation />
          </div>
        </div>
      </aside>

    </header>
  )
}
