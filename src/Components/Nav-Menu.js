import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../Components/Mobile-Menu";
import DesktopMenu from "../Components/Desktop-Menu";
import Context from "../Components/Context";

function isMobile() {
  if (window.innerWidth < 1200) {
    return true;
  }
  return false;
}

export default class NavMenu extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <header className="Nav-Header">
        <Link to="/Home">
          {/* <img className="Nav-Logo" src={} alt="Smart Marketplace Logo" /> */}
        </Link>
        <button className="Open-Menu" onClick={this.toggleMenu}>
          <i className="fas fa-bars"></i>
          Menu
        </button>
        {isMobile() ? (
          <MobileMenu
            id="MobileMenu"
            state={this.state}
            mobileToggle={this.toggleMenu}
            renderLoginLink={this.renderLoginLink}
            renderLogoutLink={this.renderLogoutLink}
          />
        ) : (
          <DesktopMenu
            state={this.state}
            LightMode={this.toggleLightMode}
            renderLoginLink={this.renderLoginLink}
            renderLogoutLink={this.renderLogoutLink}
          />
        )}
      </header>
    );
  }
}