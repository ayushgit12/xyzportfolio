import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import  "./Navbar.css"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Track scroll direction

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close the menu after clicking a menu item
  };

  return (
    <>
      <nav className={`bg-primary text-primary-foreground bg-blue-300 w-full fixed top-0 transition-transform duration-300 z-50 ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold font-mono changefont ">
                RAJUL DWIVEDI
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Home
                </a>
                
                <a href="/research" className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                   Projects
                </a>
                <a href="/certificates" className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Certificates
                </a>
                <a href="/technical" className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Technical Work
                </a>
                <a href="/skills" className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Skills
                </a>
                <a href="/education" className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary">
                  Education
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
              <a onClick={() => scrollToSection('home')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Home
              </a>
              <a onClick={() => scrollToSection('about')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                About Me
              </a>
              <a onClick={() => scrollToSection('projects')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Projects
              </a>
              <a onClick={() => scrollToSection('research')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Research Papers
              </a>
              <a onClick={() => scrollToSection('certificates')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Certificates
              </a>
              <a onClick={() => scrollToSection('technical')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Technical Work
              </a>
              <a onClick={() => scrollToSection('skills')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Skills
              </a>
              <a onClick={() => scrollToSection('education')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Education
              </a>
              <a onClick={() => scrollToSection('contact')} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main content section */}
      <main className="pt-16">
        <section id="home">
          {/* Add the content for the 'Home' section here */}
          {/* <h1>Welcome to Rajul Dwivedi's Portfolio</h1> */}
        </section>
        <section id="about">
          {/* Add the content for the 'About' section here */}
          {/* <h2>About Me</h2> */}
        </section>
        {/* Add more sections like Projects, Research, etc. */}
      </main>
    </>
  );
}
