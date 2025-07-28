import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const CompassLogo = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="25"
    viewBox="-900 -550 1800 1100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="rgb(234 179 8)" stroke="none">
      {/* Belah ketupat atas */}
      <polygon points="0,-550 -200,-350 0,0 200,-350" />
      {/* Belah ketupat kanan */}
      <polygon points="900,0 580,-110 0,0 580,110" />
      {/* Belah ketupat bawah */}
      <polygon points="0,550 205,350 0,0 -200,350" />
      {/* Belah ketupat kiri */}
      <polygon points="-900,0 -580,110 0,0 -580,-110" />
    </g>

    {/* Garis di antara belah ketupat */}
    <g stroke="rgb(234 179 8)" strokeWidth="18">
      <line x1="-400" y1="200" x2="400" y2="-200" />
      <line x1="-400" y1="-200" x2="400" y2="200" />
    </g>

    {/* Garis kecil di ujung garis*/}
    <g stroke="rgb(234 179 8)" strokeWidth="24">
      <line x1="375" y1="225" x2="415" y2="170" />
      <line x1="375" y1="-225" x2="415" y2="-170" />
      <line x1="-375" y1="225" x2="-415" y2="170" />
      <line x1="-375" y1="-225" x2="-415" y2="-170" />
    </g>
  </svg>
);

const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Kegiatan", path: "/kegiatan" },
  { name: "Materi", path: "/materi" },
  { name: "Artikel", path: "/artikel" },
  { name: "Galeri", path: "/galeri" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4">
            <CompassLogo />
            <div className="hidden md:block">
              <div className="text-xs text-gray-300">
                Perhimpunan Pendaki Gunung dan Penempuh Rimba
              </div>
              <div className="text-xl tracking-[0.3em]">G E P A L A</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 transition-colors duration-200 hover:text-yellow-500 ${
                  location.pathname === item.path
                    ? "text-yellow-500"
                    : "text-white"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800 rounded-lg p-4">
            <div className="md:hidden mb-4 text-center">
              <div className="text-sm text-gray-300">
                Perhimpunan Pendaki Gunung dan Penempuh Rimba
              </div>
              <div className="text-lg tracking-[0.2em]">G E P A L A</div>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 transition-colors duration-200 hover:text-yellow-500 ${
                  location.pathname === item.path
                    ? "text-yellow-500 bg-gray-700"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
