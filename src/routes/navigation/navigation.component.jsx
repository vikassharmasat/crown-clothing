import { Fragment } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const NavigationBar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Fragment>
      <div className="navigation" >
        <Link className="logo-container" to="/" >
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Shop
          </Link>
          <Link className="sign-in nav-link" to="auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
