import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Container from "../Shared/Container/Container";
import useAuth from "../../Hook/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className=" inline-block rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-[#7850ff] transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-[#7850ff] focus:text-[#7850ff] focus:outline-none focus:ring-0 active:text-[#7850ff] motion-reduce:transition-none"
          aria-current="page"
          href="#"
          data-te-nav-link-ref
        >
          Dashboard
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            to="/login"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-[#7850ff] transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-[#7850ff] focus:text-[#7850ff] focus:outline-none focus:ring-0 active:text-[#7850ff] motion-reduce:transition-none"
          >
            Login
          </NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink
            to="/signup"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mr-3 inline-block rounded bg-[#7850ff] px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:text-[#7a4dff] hover:border hover:border-[#7a4dff]"
          >
            Sign up for free
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <div
            onClick={logOut}
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mr-3 inline-block rounded bg-[#7850ff] px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:text-[#7a4dff] hover:border hover:border-[#7a4dff]"
          >
            Log Out
          </div>
        </li>
      )}
      <li>
        <Link className=" rounded text-2xl">
          {user ? (
            <>
              <img
                className="rounded-full"
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt="profile"
                height="30"
                width="30"
              />
            </>
          ) : (
            <FaUserCircle />
          )}
        </Link>
      </li>
    </>
  );
  return (
    <Container>
      <div className="navbar border-b">
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
              {links}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-5">
            <Link to="/">
              <img
                src="https://i.ibb.co/6rKMBGB/logo.png"
                alt="logo"
                className="w-[130px] h-[70px]"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
