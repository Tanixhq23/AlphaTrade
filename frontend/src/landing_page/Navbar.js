import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function Navbar() {
  const [cookies, , removeCookie] = useCookies(["token"]);

  const isLoggedIn = !!cookies.token;

  const handleLogout = () => {
    removeCookie("token");
  };
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/alpha.png"
            style={{ width: "25%" }}
            alt="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              {!isLoggedIn && (
                <>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  
                </>
              )}
              {isLoggedIn && (
                <>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/login"
                      onClick={handleLogout}
                    >
                     Logout
                    </Link>
                  </li>
                </>
              )}
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
