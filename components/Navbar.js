import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <header className="font-quicksand bg-transparent text-gray-700 body-font">
      <div className="container mx-auto flex p-5 justify-between items-center">
        <Link className="flex items-center mb-4 md:mb-0" href="/">
          <span className="cursor-pointer text-xl text-white font-bold title-font">
            The Coderinblack
          </span>
        </Link>
        <div className="cursor-pointer block md:hidden">
          <div className="flex items-center transition ease-in-out duration-300 justify-center w-12 h-12 bg-transparent hover:bg-transparentwhite rounded-full">
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.55554"
                width="20.4444"
                height="2.55556"
                rx="1.27778"
                fill="white"
              />
              <rect
                y="6.64447"
                width="23"
                height="2.55556"
                rx="1.27778"
                fill="white"
              />
              <rect
                x="5.62219"
                y="13.2889"
                width="17.3778"
                height="2.55556"
                rx="1.27778"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          <a className="cursor-pointer mr-8 text-white font-semibold hover:text-gray-100">
            01 My work
          </a>
          <a className="cursor-pointer mr-8 text-white font-semibold hover:text-gray-100">
            02 About me
          </a>
          <a className="cursor-pointer mr-8 text-white font-semibold hover:text-gray-100">
            03 Contact
          </a>
          <a
            className="text-white font-semibold hover:text-gray-100"
            href="https://github.com/coderinblack08"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
