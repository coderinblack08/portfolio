// import { motion } from 'framer-motion';
import Navbar from './Navbar';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header} sm:h-screen`}>
      <Navbar />
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
        Software • React • Vue • Nodejs • Typescript
      </div>
      <div className="block p-5 sm:p-10 md:p-20 pb-16">
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
