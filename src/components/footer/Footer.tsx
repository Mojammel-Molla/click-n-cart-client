import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ShopEasy</h2>
            <p className="text-gray-400">
              Your one-stop destination for all your shopping needs. Quality
              products, affordable prices, and great customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              <strong>Email:</strong> support@shopeasy.com
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-gray-400">
              <strong>Address:</strong> 123 Main Street, Anytown, USA
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#facebook"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.144v3.242l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#twitter"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.936 9.936 0 01-2.828.775A4.94 4.94 0 0023.337 3.1a9.863 9.863 0 01-3.127 1.195A4.917 4.917 0 0016.616 3c-2.73 0-4.945 2.215-4.945 4.945 0 .388.045.765.127 1.13-4.106-.205-7.746-2.173-10.193-5.165a4.93 4.93 0 00-.667 2.487c0 1.715.872 3.23 2.188 4.117a4.905 4.905 0 01-2.244-.62v.063c0 2.397 1.706 4.39 3.973 4.843a4.904 4.904 0 01-2.238.084c.63 1.96 2.445 3.385 4.6 3.424a9.874 9.874 0 01-6.102 2.1c-.398 0-.79-.023-1.175-.068A13.945 13.945 0 007.548 21c9.057 0 14.015-7.514 14.015-14.017 0-.213-.004-.426-.015-.636A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="#instagram"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.012 7.053.07 5.775.128 4.635.412 3.672 1.375c-.963.963-1.247 2.103-1.305 3.381C2.012 5.667 2 6.075 2 9.333v5.333c0 3.259.012 3.667.07 4.947.058 1.278.342 2.418 1.305 3.381.963.963 2.103 1.247 3.381 1.305C8.333 21.988 8.741 22 12 22s3.667-.012 4.947-.07c1.278-.058 2.418-.342 3.381-1.305.963-.963 1.247-2.103 1.305-3.381.058-1.28.07-1.688.07-4.947V9.333c0-3.259-.012-3.667-.07-4.947-.058-1.278-.342-2.418-1.305-3.381-.963-.963-2.103-1.247-3.381-1.305C15.667.012 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.044 1.044 0 110-2.088 1.044 1.044 0 010 2.088z" />
            </svg>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 ShopEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
