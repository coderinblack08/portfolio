import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center my-20 w-11/12 md:w-4/5 mx-auto">
        {/* <h1 className="font-dm text-4xl">Blog Posts</h1>
        <p className="font-quicksand">
          Software enginering content from your's truly
        </p> */}
        <div className="mt-16">
          <div
            className="cursor-pointer flex items-center flex-col md:flex-row mt-10 py-10 rounded"
            onClick={() => {
              if (window.innerWidth < 768) {
                window.location.href = 'https://blog.coderinblack.now.sh';
              }
            }}
          >
            <img
              className="object-cover w-64 h-48 rounded"
              src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a1575338a893a5f_33.%20Beauty%20Bush.jpg"
              alt="Coderinblack Academy"
            />
            <div className="md:ml-20 mt-10 text-center md:text-left md:mt-0">
              <p className="font-quicksand text-gray-500 text-xl font-hairline">
                Software Development
              </p>
              <h3 className="font-dm text-3xl">Coderinblack Blog</h3>
              <p className="font-quicksand text-xl my-2 mb-4 text-gray-800 max-w-xs sm:max-w-none">
                My very own blog with posts about software and beyond!
              </p>
              <a href="https://blog.coderinblack.now.sh">
                <span className="text-lg cursor-pointer hidden md:flex items-center text-indigo-400 font-quicksand">
                  Read More
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div
            className="cursor-pointer md:cursor-auto flex items-center flex-col md:flex-row-reverse mt-10 py-10 rounded"
            onClick={() => {
              if (window.innerWidth < 768) {
                window.location.href = 'https://contestpug.vercel.app';
              }
            }}
          >
            <img
              className="object-contain h-64 rounded"
              src="https://contestpug.vercel.app/_next/static/images/contestpug-412f281e93e4c6e56f3892d978a87888.svg"
              alt="Coderinblack Academy"
            />
            <div className="md:mr-20 mt-10 text-center md:text-left md:mt-0">
              <p className="font-quicksand text-gray-500 text-xl font-hairline">
                UI/UX Software Project
              </p>
              <h3 className="font-dm text-3xl">Contest Pug</h3>
              <p className="font-quicksand text-xl my-2 mb-4 text-gray-800 max-w-xs sm:max-w-xl">
                Contest pug, an online application that allows organizers and
                contestants host and take competitions online. Created with 💖
                in GraphQL, Postgres, Nextjs, and Typescript!
              </p>
              <a href="https://contestpug.vercel.app">
                <span className="text-lg cursor-pointer hidden md:flex items-center text-indigo-400 font-quicksand">
                  Read More
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer xl:cursor-auto flex items-center flex-col xl:flex-row mt-10 py-10 rounded"
          onClick={() => {
            if (window.innerWidth < 768) {
              window.location.href = 'https://github.com/coderinblack08/gekko';
            }
          }}
        >
          <img
            className="object-contain h-64 rounded"
            src="../static/gekko.png"
            alt="Coderinblack Academy"
          />
          <div className="xl:ml-20 mt-10 text-center xl:text-left xl:mt-0">
            <div className="flex flex-col md:flex-col-reverse xl:flex-col">
              <p className="font-quicksand text-gray-500 text-xl font-hairline">
                Hackathon, <strong>🥈 Place</strong>
              </p>
              <h3 className="font-dm text-3xl">Gekko</h3>
            </div>
            <p className="font-quicksand text-xl my-2 mb-4 text-gray-800 max-w-xs sm:max-w-xl">
              Gekko is an open source project created for school districts,
              extra-curricular classes, and or other educational programs to
              communicate with students and guardians digitally. Sloppy code
              created in 48 hours for{' '}
              <a
                href="https://bridgehacks.com"
                className="hover:underline text-indigo-400"
              >
                Bridgehacks 🏆
              </a>{' '}
              with Feathers, Vue, Node, and MongoDB!
            </p>
            <a
              href="https://github.com/coderinblack08/gekko"
              className="flex xl:block justify-center"
            >
              <span className=" text-lg cursor-pointer hidden md:flex items-center text-indigo-400 font-quicksand">
                Read More
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center font-quicksand font-medium text-gray-500 pb-10">
        See you next time! © Copyright Coderinblack 2020
      </footer>
    </div>
  );
};

export default Home;
