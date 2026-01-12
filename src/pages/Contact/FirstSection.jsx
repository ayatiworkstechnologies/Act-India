import {Link} from 'react-router-dom';

export default function Breadcrumb () {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 py-10 px-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center text-sm text-gray-700">

          {/* Stylish Home Icon */}
          <Link
            to="/"
            aria-label="Home"
            className="flex items-center justify-center 
                       transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M4 11.5L12 5l8 6.5" />
              <path d="M8 20V12h8v8" />
            </svg>

          </Link>

          {/* Arrow */}
          <span className="mx-4 text-gray-400 text-lg">›</span>

          {/* Current Page */}
          <span className="font-semibold text-gray-900 tracking-wide uppercase">
            Contact Us
          </span>

        </nav>
      </div>
    </div>
  );
}
