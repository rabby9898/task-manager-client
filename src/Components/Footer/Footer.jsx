import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#7850ff] text-base-content">
        <div>
          <nav>
            <div className="grid grid-flow-col gap-6 text-2xl text-white">
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaDribbble />
              </a>
              <a>
                <FaTwitter />
              </a>
            </div>
          </nav>
          <nav className="grid grid-flow-col gap-6 text-base text-white ">
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="#" className="link link-hover">
              About us
            </Link>
            <Link to="# " className="link link-hover">
              Contact
            </Link>
            <Link to="/dashboard" className="link link-hover">
              Dashboard
            </Link>
          </nav>
        </div>

        <aside>
          <p className="text-base text-white border-t border-t-gray">
            Copyright © 2023 - All right reserved by Fajle Rabby
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
