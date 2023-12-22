import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#7850ff]">
      <footer
        style={{ backgroundColor: "#7850ff" }}
        className="footer footer-center p-10 text-base-content"
      >
        <div>
          <nav>
            <div className="grid grid-flow-col gap-6 text-2xl text-white">
              <a href="#">
                <FaFacebook className="text-white" />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-white">
                <FaDribbble />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
            </div>
          </nav>
          <nav className="grid grid-flow-col gap-6 text-base text-white">
            <Link to="/" className="link link-hover text-white">
              Home
            </Link>
            <Link to="#" className="link link-hover text-white">
              About us
            </Link>
            <Link to="# " className="link link-hover text-white">
              Contact
            </Link>
            <Link to="/dashboard" className="link link-hover text-white">
              Dashboard
            </Link>
          </nav>
        </div>

        <aside>
          <p className="text-base text-white border-t border-t-white">
            Copyright © 2023 - All right reserved by Fajle Rabby
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
