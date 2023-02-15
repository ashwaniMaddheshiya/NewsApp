import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0  sticky">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          <Link href="/">NewsApp</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
        >
          <Image
            src="/hamburger.png"
            width="50"
            height="50"
            alt=""
            name={open ? "close" : "menu"}
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              href="/business"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Business
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              href="/technology"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Technology
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              href="/science"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Science
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              href="/health"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Health
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              href="/entertainment"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Entertainment
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              href="/sports"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Sports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
