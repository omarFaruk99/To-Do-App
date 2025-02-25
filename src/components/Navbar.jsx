import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-slate-900 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">To-do</Link>
              </li>
              <li>
                <Link to="/about">In Progress</Link>
              </li>
              <li>
                <Link to="/done">Done</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Todo App
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
              >
                To-do
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
              >
                In Progress
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/done"
                className={({ isActive }) =>
                  isActive ? "text-primary font-bold" : ""
                }
              >
                Done
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
