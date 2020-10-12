// import { motion } from 'framer-motion';
import Navbar from './Navbar';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div
      className={`${styles.header} sm:h-screen relative`}
      style={{
        maxHeight: '920px',
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="absolute bottom-0 mb-5 lg:mb-8 xl:mb-10">
          <svg
            className="w-6 md:w-8 block sm:hidden lg:block"
            viewBox="0 0 49 84"
            fill="none"
            style={{ color: '#F0E1FEd8' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="45"
              height="80"
              rx="22.5"
              stroke="currentColor"
              strokeWidth="4"
            />
            <circle
              cx="24.5"
              cy="56.5"
              r="14.5"
              fill="currentColor"
              className=" transition animate-bounce"
            />
          </svg>
        </div>
      </div>
      <div
        className="sm:flex items-center font-semibold font-quicksand hidden absolute right-0 bottom-0 p-5 transform"
        style={{
          color: '#F0E1FEd8',
        }}
      >
        {/* <div
          className="w-20 mr-5"
          style={{
            backgroundColor: '#F0E1FEd8',
            height: '.1em',
          }}
        ></div> */}
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        Software • React • Vue • Nodejs • Typescript
      </div>
      <div className="p-5 pb-20 sm:py-10 md:py-20 container mx-auto">
        <div
          className="h-1 w-10 sm:h-2 sm:w-16 mb-3 sm:mb-5"
          style={{
            backgroundColor: '#ffffffe2',
          }}
        ></div>
        <h1
          className={`${styles.title} font-inter font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl`}
        >
          Software Developer. <br />
          UI/UX Designer. <br />
          Dreamer. <br />
        </h1>
        <p
          className={`${styles.text} font-quicksand font-bold text-xl sm:text-2xl md:text-3xl pt-3 md:pt-5`}
        >
          Student based in Sillicon Valley
        </p>
      </div>
    </div>
  );
};

export default Header;
