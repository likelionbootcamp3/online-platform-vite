import { Link } from "react-router-dom";
import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-40 w-full border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://techit.education/img/techit_logo.svg"
                alt=""
                width={108}
                height={16}
              />
            </Link>
          </div>

          {/* Nav */}
          <nav className="hidden flex-grow lg:block">
            <ul className="flex items-center">
              <li>
                <Link to="/about" className="px-4 font-semibold uppercase">
                  About
                </Link>
              </li>
              <li>
                <Link to="/classes" className="px-4 font-semibold uppercase">
                  Classes
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action */}
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="flex rounded-full border py-2 px-4 text-sm font-semibold uppercase lg:border-none lg:text-base"
            >
              Login
            </Link>
            <button className="px-1 text-2xl lg:hidden">
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
