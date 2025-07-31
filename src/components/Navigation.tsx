import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gradient font-poppins">
              A Nandini
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground py-2 rounded-lg font-medium transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;