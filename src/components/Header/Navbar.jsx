import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../theme-context";

const Navbar = (props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="container-fluid gx-0">
      <div className=" d-none d-lg-block header-one">
        <div className="row">
          <div className="col-6 d-flex gap-5 align-items-center">
            <div className="d-flex gap-5">
              <div className="email_head-one">
                <i className="fa-solid fa-envelope "></i>
                <span>info@ambikasoni.com</span>
              </div>
              <div className="email_head-one">
                <i className="fa-sharp fa-solid fa-book-open"></i>
                <span>app.Knowledge City, Vadodara, Gujarat 390019</span>
              </div>
            </div>
          </div>

          <div className="col-6 d-flex align-items-center justify-content-end gap-3 header-one-right">
            <i className="fa-brands fa-facebook p-2"></i>
            <i className="fa-brands fa-twitter p-2"></i>
            <i className="fa-brands fa-linkedin p-2"></i>
            <i className="fa-brands fa-square-instagram p-2"></i>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  px-5 shadow">
        <div className="container-fluid">
          <NavLink to="/">
            <h4 className="text-light logo">Soni_Collection</h4>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to="/React-project-E-commerce/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item "
                      to="/React-project-E-commerce/men"
                    >
                      Men
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item "
                      to="/React-project-E-commerce/women"
                    >
                      Women
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item "
                      to="/React-project-E-commerce/electronics"
                    >
                      Electronic
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item "
                      to="/React-project-E-commerce/jewelery"
                    >
                      Jewelery
                    </NavLink>
                  </li>

                  {/* ["electronics","jewelery","men's clothing","women's clothing"] */}
                </ul>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to="/React-project-E-commerce/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item ps-3 d-flex btn_nav_link">
                <NavLink to="/React-project-E-commerce/cart">
                  <i className="fa-sharp fa-solid fa-cart-shopping mt-2 cart fs-20"></i>
                  <p className="cart_length" style={{ position: "absolute" }}>
                    {props.size}
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="mode-switch">
                  <label>
                    <input
                      type="checkbox"
                      onChange={toggleTheme}
                      checked={theme === "dark"}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
