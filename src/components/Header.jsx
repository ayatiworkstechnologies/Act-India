import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { searchIndex } from "../service/searchUtils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [timer, setTimer] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  // ✅ for type-ahead
  const [q, setQ] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlight, setHighlight] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const dropdowns = {
    Dealers: [
      { name: "Volvo", path: "/volvo" },
      { name: "Epiroc", path: "/epiroc" },
      { name: "SDLG", path: "/sdlg" },
      { name: "Ammann", path: "/ammann" },
      { name: "Husqvarna", path: "/husqvarna" },
      { name: "Schwing Stetter", path: "/self-loading-mixer" },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Brand partner", path: "/volvo", dropdown: dropdowns.Dealers },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleEnter = (name) => {
    if (timer) clearTimeout(timer);
    setActiveDropdown(name);
  };

  const handleLeave = () => {
    const newTimer = setTimeout(() => setActiveDropdown(null), 1000);
    setTimer(newTimer);
  };

  // ✅ update suggestions with debounce
  useEffect(() => {
    const id = setTimeout(() => {
      if (q.trim()) setSuggestions(searchIndex(q, 6));
      else setSuggestions([]);
      setHighlight(-1);
    }, 120);
    return () => clearTimeout(id);
  }, [q]);

  // ✅ keyboard nav in suggestion list
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (highlight >= 0) {
        e.preventDefault();
        const chosen = suggestions[highlight];
        setShowSearch(false);
        setQ("");
        setSuggestions([]);
        navigate(chosen.path);
      }
    }
  };

  const submitSearch = (query) => {
    const term = (query ?? q).trim();
    if (!term) return;
    setShowSearch(false);
    setSuggestions([]);
    setQ("");
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-sm">
      <section className="py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/assets/logo.svg"
                alt="ACT Logo"
                className="h-[2rem] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-primary text-black">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleEnter(link.name)}
                  onMouseLeave={handleLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative flex items-center py-1 
                       after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                       after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                       ${isActive ? "text-secondary after:scale-x-100" : ""}`
                    }
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </NavLink>

                  {activeDropdown === link.name && (
                    <div className="absolute bg-white shadow-lg rounded-md mt-2 w-56">
                      <ul className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                `relative block px-4 py-2 text-sm 
                                 after:content-[''] after:absolute after:left-4 after:bottom-0 after:h-[2px] after:w-[calc(100%-2rem)] 
                                 after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                                 ${isActive ? "text-secondary font-semibold after:scale-x-100" : ""}`
                              }
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative py-1 
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                     after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                     ${isActive ? "text-secondary after:scale-x-100" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}

            {/* Search Button */}
            <button
              onClick={() => {
                setShowSearch(true);
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
              className="flex items-center font-primary border border-blue-600 rounded-full px-3 py-1 hover:bg-gradient-primary hover:text-white transition"
            >
              <Search size={16} />
              <span className="ml-1">Search</span>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start space-y-2 py-6 px-6 md:hidden">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="w-full">
                <button
                  className="w-full flex justify-between items-center py-2 text-sm font-medium "
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  }
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === link.name && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item, idx) => (
                      <NavLink
                        key={idx}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `relative block py-1 text-sm
                           after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                           after:bg-gradient-secondary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                           ${isActive ? "text-secondary after:scale-x-100" : ""}`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium
                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                   after:bg-gradient-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                   ${isActive ? "text-secondary after:scale-x-100" : ""}`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          {/* Mobile Search */}
          <button
            onClick={() => {
              setShowSearch(true);
              setTimeout(() => inputRef.current?.focus(), 50);
            }}
            className="flex items-center border border-blue-600 text-primary rounded-full px-4 py-2 mt-2 hover:bg-gradient-primary hover:text-white transition"
          >
            <Search size={18} />
            <span className="ml-1">Search</span>
          </button>
        </div>
      )}

      {/* 🔍 Search Modal with typeahead */}
      {showSearch && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
          onClick={(e) => {
            // close if click on overlay
            if (e.target === e.currentTarget) setShowSearch(false);
          }}
        >
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              aria-label="Close search"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Search</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitSearch(q);
              }}
              className="relative"
            >
              <input
                ref={inputRef}
                type="text"
                name="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type to search..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-primary/50"
                autoComplete="off"
              />

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-64 overflow-auto z-10">
                  {suggestions.map((s, i) => (
                    <li
                      key={s.id}
                      className={`px-4 py-2 text-sm cursor-pointer ${
                        i === highlight ? "bg-gray-100" : "hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => setHighlight(i)}
                      onMouseLeave={() => setHighlight(-1)}
                      onClick={() => {
                        setShowSearch(false);
                        setQ("");
                        setSuggestions([]);
                        navigate(s.path);
                      }}
                    >
                      <div className="font-medium">{s.title}</div>
                      {s.tags?.length ? (
                        <div className="text-xs text-gray-600">
                          {s.tags.slice(0, 4).join(" · ")}
                        </div>
                      ) : null}
                    </li>
                  ))}
                  <li
                    className="px-4 py-2 text-xs text-gray-600 border-t cursor-pointer hover:bg-gray-50"
                    onClick={() => submitSearch(q)}
                  >
                    Press Enter to search all results for “{q}”
                  </li>
                </ul>
              )}

              <button
                type="submit"
                className="mt-3 w-full bg-gradient-primary text-white rounded-md py-2 hover:opacity-90 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
