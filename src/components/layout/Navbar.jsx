import { Link, useNavigate } from "react-router-dom";
import {
  FaTrain,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useBookingStore from "@/store/bookingStore";
import { IoChatbubbleSharp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useBookingStore();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      to: "/",
      label: "Beranda",
      icon: <FaHome className="text-red-600 text-sm" />,
    },
    {
      to: "/trains",
      label: "Cari Kereta",
      icon: <FaTrain className="text-red-600 text-sm" />,
    },
    {
      to: "/about",
      label: "Tentang Kami",
      icon: <FaInfoCircle className="text-red-600 text-sm" />,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <FaTrain className="text-red-600 text-3xl transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-red-600 rounded-full"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl text-neutral-900 tracking-wide">
                GoRail
              </span>

              <span className="railway-caption text-neutral-500 text-xs tracking-wider">
                EST. 2026
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative flex items-center gap-2 px-4 py-2 text-gray-700 font-medium font-serif hover:text-red-600 transition-colors duration-300 group"
              >
                {link.icon}
                {link.label}

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 font-serif ">
            {isLoggedIn ? (
              <>
                <div className="text-right">
                  <span className="text-gray-400 text-xs tracking-wider">
                    Penumpang
                  </span>

                  <p className="text-gray-800 text-sm font-medium">
                    {user?.name}
                  </p>
                </div>

                <div className="h-8 w-px bg-gray-300"></div>

                <button
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-md transition-all duration-300"
                >
                  <FaSignOutAlt className="text-sm" />

                  <span className="text-sm font-medium">Keluar</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/contact")}
                className="cursor-pointer flex items-center gap-2 bg-red-600 px-5 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 text-white"
              >
                <IoChatbubbleSharp className="text-sm" />

                <span className="text-sm font-medium tracking-wide">Kontak</span>
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-125 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
              >
                {link.icon}
                <span className="font-medium font-serif">{link.label}</span>
              </Link>
            ))}

            <div className="border-t border-gray-200 my-2"></div>

            {isLoggedIn ? (
              <div className="px-4 py-2">
                <div className="mb-3">
                  <p className="text-xs text-gray-400 tracking-wide">
                    Penumpang
                  </p>

                  <p className="text-gray-800 font-medium">{user?.name}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition"
                >
                  <FaSignOutAlt />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  navigate("/contact");
                  closeMenu();
                }}
                className="mx-4 flex items-center justify-center gap-2 bg-red-600 px-4 py-3 rounded-lg hover:bg-red-700 transition text-white"
              >
                <IoChatbubbleSharp />

                <span className="font-medium">Kontak</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
