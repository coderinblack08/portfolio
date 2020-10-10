import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="my-20 w-11/12 md:w-4/5 mx-auto">
        {/* <h1 className="font-dm text-4xl">Blog Posts</h1>
        <p className="font-quicksand">
          Software enginering content from your's truly
        </p> */}
        <div className="mt-16">
          <div
            className="cursor-pointer flex items-center flex-col md:flex-row mt-10 py-10 hover:shadow-md md:hover:shadow-none transition ease-in-out duration-500 rouned"
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
            className="cursor-pointer md:cursor-auto flex items-center flex-col md:flex-row mt-10 py-10 hover:shadow-md md:hover:shadow-none transition ease-in-out duration-500 rouned"
            onClick={() => {
              if (window.innerWidth < 768) {
                window.location.href = 'https://contestpug.vercel.app';
              }
            }}
          >
            <img
              className="object-contain w-64 h-48 rounded"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiMxQzY0RjIiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48cGF0aCBkPSJNMjUuMDAwMSAyMy43NUMyOC4xMDIgMjMuNzUgMzIuNTAwMSAyOC41NDUzIDMyLjUwMDEgMzEuNTcyM0MzMi41MDAxIDMyLjkzNTYgMzEuNDUyOCAzMy43NSAyOS42OTc3IDMzLjc1QzI3Ljc4OTkgMzMuNzUgMjYuNTMwMSAzMi43NzAzIDI1LjAwMDEgMzIuNzcwM0MyMy40NTY3IDMyLjc3MDMgMjIuMTkzNCAzMy43NSAyMC4zMDI0IDMzLjc1QzE4LjU0NzMgMzMuNzUgMTcuNTAwMSAzMi45MzU2IDE3LjUwMDEgMzEuNTcyM0MxNy41MDAxIDI4LjU0NTMgMjEuODk4MSAyMy43NSAyNS4wMDAxIDIzLjc1Wk0zMC43NTMyIDIzLjI1NzVDMzEuMTU5NCAyMS45MDM5IDMyLjQxMSAyMS4wMjc0IDMzLjU0ODUgMjEuMjk5MkMzNC42ODYgMjEuNTcxMSAzNS4yNzg2IDIyLjg4ODcgMzQuODcyMyAyNC4yNDIyQzM0LjQ2NjEgMjUuNTk1NyAzMy4yMTQ1IDI2LjQ3MjMgMzIuMDc3IDI2LjIwMDRDMzAuOTM5NSAyNS45Mjg1IDMwLjM0NjkgMjQuNjExIDMwLjc1MzIgMjMuMjU3NVpNMjcuNDQzOCAyMi40NDU3QzI2LjIzNTIgMjIuMTI3OCAyNS42MzA1IDIwLjQ5NSAyNi4wOTMgMTguNzk4OUMyNi41NTU1IDE3LjEwMjggMjcuOTEwMiAxNS45ODYgMjkuMTE4OCAxNi4zMDM5QzMwLjMyNzQgMTYuNjIxOSAzMC45MzIxIDE4LjI1NDcgMzAuNDY5NiAxOS45NTA4QzMwLjAwNzEgMjEuNjQ2OSAyOC42NTIgMjIuNzY0MSAyNy40NDM4IDIyLjQ0NTdaTTE2LjQ1MiAyMS4yOTk2QzE3LjU4OTUgMjEuMDI3OCAxOC44NDA3IDIxLjkwNDMgMTkuMjQ3MyAyMy4yNTc4QzE5LjY1MzYgMjQuNjExNCAxOS4wNjEgMjUuOTI4OSAxNy45MjM1IDI2LjIwMDhDMTYuNzg2IDI2LjQ3MjcgMTUuNTM0OCAyNS41OTYxIDE1LjEyODIgMjQuMjQyNkMxNC43MjE5IDIyLjg4OTEgMTUuMzE0NSAyMS41NzE1IDE2LjQ1MiAyMS4yOTk2Wk0yMi41NTYzIDIyLjQ0NTdDMjEuMzQ3NyAyMi43NjM3IDE5Ljk5MyAyMS42NDY5IDE5LjUzMDUgMTkuOTUwOEMxOS4wNjggMTguMjU0NyAxOS42NzI3IDE2LjYyMjMgMjAuODgxMyAxNi4zMDM5QzIyLjA4OTkgMTUuOTg1NiAyMy40NDQ2IDE3LjEwMjggMjMuOTA3MSAxOC43OTg5QzI0LjM2OTYgMjAuNDk1IDIzLjc2NDkgMjIuMTI3OCAyMi41NTYzIDIyLjQ0NTdaIiBmaWxsPSIjZmZmIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDAiPjxwYXRoIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDM1IDE1KSIgZD0iTTAgMEgyMFYyMEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg=="
              alt="Coderinblack Academy"
            />
            <div className="md:ml-20 mt-10 text-center md:text-left md:mt-0">
              <p className="font-quicksand text-gray-500 text-xl font-hairline">
                Software Project
              </p>
              <h3 className="font-dm text-3xl">Contest Pug</h3>
              <p className="font-quicksand text-xl my-2 mb-4 text-gray-800 max-w-xs sm:max-w-none">
                Platform for creating custom tailored contests!
                <br />
                Created with 💖 in GraphQL, Postgres, Nextjs, and Typescript!
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
      </div>
    </div>
  );
};

export default Home;
