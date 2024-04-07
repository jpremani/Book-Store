import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);
  const { user } = useContext(AuthContext);

  //toggle menu
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  //NavItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell You Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-400">
        <nav
          className={`py-4 lg:px-24 px-4 ${
            isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
          }`}
        >
          <div className="flex justify-between items-center text-base gap-8">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-700 flex items-center gap-2"
            >
              <FaBlog className="inline-block" />
              Books
            </Link>
            {/* nav items for large devices */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              ))}
            </ul>
            {/* btn for lg devices */}
            <div>
              <button className="space-x-12 hidden lg:flex items-center">
                <FaBarsStaggered className="w-5 hover:text-blue-700" />
              </button>
              {user ? user.email : ""}
            </div>
            {/* MEnu btn for mobile device */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5 text-black" />
                ) : (
                  <FaBarsStaggered className="h-5 w-5 text-black" />
                )}
              </button>
            </div>
          </div>
          {/* nav items for small devices */}
          <div
            className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-white upercase cursor-pointer "
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
