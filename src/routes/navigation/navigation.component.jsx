import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ComptonLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ComptonLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            BOUTIQUE
          </Link>
          <Link className="nav-link" to="/auth">
            CONNEXION
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
