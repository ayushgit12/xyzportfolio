import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              Logo
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Home
              </a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                About Me
              </a>
              <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Projects
              </a>
              <a href="#research" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Research Papers
              </a>
              <a href="#certificates" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Certificates
              </a>
              <a href="#technical" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Technical Work
              </a>
              <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Skills
              </a>
              <a href="#education" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Education
              </a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              About Me
            </a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Projects
            </a>
            <a href="#research" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Research Papers
            </a>
            <a href="#certificates" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Certificates
            </a>
            <a href="#technical" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Technical Work
            </a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Skills
            </a>
            <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Education
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
