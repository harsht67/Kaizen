import "./Header.scss";

import { CiUser } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import Navigation from "../../components/Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
        
        <h1 className="header__logo">Kaizen</h1>

        <Navigation/>
        
        <div className="header__options">
          <CiUser className="header__user-button"/>
          <SlBag className="header__cart-button"/>
        </div>

    </header>
  )
}
