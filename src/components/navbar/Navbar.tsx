import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/product-management"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Cart <sup className="text-green-500 font-bold">0</sup>
      </NavLink>
      <NavLink
        to="/sign-up"
        className={({ isActive }) =>
          isActive
            ? 'underline font-semibold text-blue-400'
            : 'hover:text-gray-300'
        }
      >
        Sign In
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold  text-primary-light">
              ClickNCart
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">{navLinks}</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-2 pb-4">{navLinks}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
