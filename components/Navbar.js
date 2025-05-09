function Navbar() {
  const { useState, useEffect } = React;
  const { Link, useLocation } = ReactRouterDOM;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-primary shadow-md py-2' : 'bg-transparent text-white py-4'}`} data-id="ap4yue026" data-path="components/Navbar.js">
            <div className="container mx-auto px-4 md:px-6" data-id="a0lngir69" data-path="components/Navbar.js">
                <div className="flex justify-between items-center" data-id="vqsnu9scq" data-path="components/Navbar.js">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent-blue rounded flex items-center justify-center" data-id="cy873dwcu" data-path="components/Navbar.js">
                            <i className="fas fa-network-wired text-white" data-id="zqmaxvmo5" data-path="components/Navbar.js"></i>
                        </div>
                        <span className="text-xl font-bold" data-id="v3tdrl7pm" data-path="components/Navbar.js">KabuTech</span>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8" data-id="2xyc4aqzo" data-path="components/Navbar.js">
                        <Link to="/" className={`hover:text-accent-blue ${location.pathname === '/' ? 'text-accent-blue font-medium' : ''}`}>Home</Link>
                        <Link to="/about" className={`hover:text-accent-blue ${location.pathname === '/about' ? 'text-accent-blue font-medium' : ''}`}>About</Link>
                        <Link to="/services" className={`hover:text-accent-blue ${location.pathname === '/services' ? 'text-accent-blue font-medium' : ''}`}>Services</Link>
                        <Link to="/portfolio" className={`hover:text-accent-blue ${location.pathname === '/portfolio' ? 'text-accent-blue font-medium' : ''}`}>Portfolio</Link>
                        <Link to="/blog" className={`hover:text-accent-blue ${location.pathname === '/blog' ? 'text-accent-blue font-medium' : ''}`}>Blog</Link>
                        <Link to="/contact" className={`hover:text-accent-blue ${location.pathname === '/contact' ? 'text-accent-blue font-medium' : ''}`}>Contact</Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)} data-id="v1ijpxo7l" data-path="components/Navbar.js">

                        {isOpen ? <i className="fas fa-times" data-id="0l1fppsv7" data-path="components/Navbar.js"></i> : <i className="fas fa-bars" data-id="1qw9wjlx1" data-path="components/Navbar.js"></i>}
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {isOpen &&
        <div className="md:hidden mt-4 pb-4" data-id="j0qpf25tj" data-path="components/Navbar.js">
                        <div className="flex flex-col space-y-4" data-id="vxnnkfw4g" data-path="components/Navbar.js">
                            <Link to="/" className={`hover:text-accent-blue ${location.pathname === '/' ? 'text-accent-blue font-medium' : ''}`}>Home</Link>
                            <Link to="/about" className={`hover:text-accent-blue ${location.pathname === '/about' ? 'text-accent-blue font-medium' : ''}`}>About</Link>
                            <Link to="/services" className={`hover:text-accent-blue ${location.pathname === '/services' ? 'text-accent-blue font-medium' : ''}`}>Services</Link>
                            <Link to="/portfolio" className={`hover:text-accent-blue ${location.pathname === '/portfolio' ? 'text-accent-blue font-medium' : ''}`}>Portfolio</Link>
                            <Link to="/blog" className={`hover:text-accent-blue ${location.pathname === '/blog' ? 'text-accent-blue font-medium' : ''}`}>Blog</Link>
                            <Link to="/contact" className={`hover:text-accent-blue ${location.pathname === '/contact' ? 'text-accent-blue font-medium' : ''}`}>Contact</Link>
                        </div>
                    </div>
        }
            </div>
        </nav>);

}