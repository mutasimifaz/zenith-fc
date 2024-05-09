import { NavLink } from "react-router-dom";
import zfc from "./../assets/zenithfc.svg";
const Header = () => {
  return (
    <div className="navbar bg-purple-600 honk">
      <div className="navbar-start honk">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content honk mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="text-xl" to="/team">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl" to="/becomeplayer">
                Join us
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl" to="/sponsors">
                Sponsors
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl" to="/fixtures">
                Fixtures
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl" to="/about">
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex honk">
        <ul className="menu menu-horizontal px-1 honk">
          <li>
            <NavLink className="text-xl link link-info" to="/team">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink className="text-xl link link-info" to="/becomeplayer">
              Join us
            </NavLink>
          </li>
          <li>
            <NavLink className="text-xl link link-info" to="/sponsors">
              Sponsors
            </NavLink>
          </li>
          <li>
            <NavLink className="text-xl link link-info" to="/fixtures">
              Fixtures
            </NavLink>
          </li>
          <li>
            <NavLink className="text-xl link link-info" to="/about">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/">
          <img className="w-16" src={zfc} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
