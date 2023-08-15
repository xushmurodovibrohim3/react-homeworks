import { Component } from "react";
import { ModeBtn } from "../ModeBtn/ModeBtn";

import './Header.scss';

class Header extends Component {
   state = {
      isDarkMode: false
   }
   render() {
      return (
         <header className="header">
            <div className="header__content container">
               <div className="logo">Where in the world?</div>
               <ModeBtn className="mode-btn" />
            </div>
         </header>
      )
   }
}

export default Header;