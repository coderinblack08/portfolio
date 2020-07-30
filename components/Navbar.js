import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <header className="font-quicksand bg-transparent text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-white mb-4 md:mb-0">
          <span className="text-xl">The Coderinblack</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-8 text-white font-semibold hover:text-gray-100">
            01 My work
          </a>
          <a className="mr-8 text-white font-semibold hover:text-gray-100">
            02 About me
          </a>
          <a className="mr-8 text-white font-semibold hover:text-gray-100">
            03 Contact
          </a>
          <a className="text-white font-semibold hover:text-gray-100">
            <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
