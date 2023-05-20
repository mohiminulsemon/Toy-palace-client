import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProviders";
import { useContext } from "react";

const Nav = () => {

  // const location = useLocation();

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-secondary lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/alltoys">All Toys</NavLink>
              </li>
              <li>
                <NavLink to="/mytoys">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/addtoys">Add a Toy</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              {/* <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li> */}
            </ul>
          </div>
          <a className="text-secondary normal-case text-2xl font-bold">Toy Palace</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/alltoys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/mytoys">My Toys</NavLink>
            </li>
            <li>
              <NavLink to="/addtoys">Add a Toy</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {/* <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
          <span className="flex gap-1">
            <img className="w-1/5 rounded-full" src={user.photoURL} title={user.displayName} alt="" />
            <button className="btn btn-secondary" onClick={handleLogOut}>
              SignOut
            </button>
          </span>
        ) : (
          <span>
            <NavLink className="btn btn-secondary text-white" to="/login">Login</NavLink>
          </span>
        )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
