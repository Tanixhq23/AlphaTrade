import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menu = ({ Username }) => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const acitveMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="alpha.png" style={{ width: "130px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? acitveMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? acitveMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? acitveMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? acitveMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? acitveMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? acitveMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
          <li
            onClick={() => {
              handleMenuClick(7);
              window.location.href = "http://localhost:3000";
            }}
          >
            <p className={selectedMenu === 7 ? acitveMenuClass : menuClass}>
              Home
            </p>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleMenuClick}>
          <div className="avatar">ZU</div>
          <p className="username">{Username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
