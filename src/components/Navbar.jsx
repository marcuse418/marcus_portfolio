import { useEffect, useState } from 'react';

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-40 bg-[rgba(188, 157, 157, 0.6)] backdrop-blur-lg border-b border-white/10 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-none'}`}>
            <div className="max-w-5x1 mx-auto px-10">
                <div className="flex items-center justify-between h-14">
                    <a href="#home" className="relative flex items-center">
                        <span className={`text-xl font-bold text-black transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                            Marcus Elliott
                        </span>
                        <img 
                            src="/marcus_portfolio/Logo3.png"
                            alt="Logo"
                            className={`absolute left-0 h-10 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen ((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-4">

                        <a href="#home" className="text-black px-4 py-2 rounded-full hover:bg-gray-200/100 hover:backdrop-blur-md hover:shadow-xl transition-all duration-300">
                            Home 
                        </a>

                        <a href="#projects" className="text-black px-4 py-2 rounded-full hover:bg-gray-200/50 hover:backdrop-blur-md hover:shadow-xl transition-all duration-300">
                            Projects 
                        </a>

                        <a href="#about" className="text-black px-4 py-2 rounded-full hover:bg-gray-200/50 hover:backdrop-blur-md hover:shadow-xl transition-all duration-300">
                            About 
                        </a>

                        {/* <a href="#contact" className="text-black hover:text-gray-400 transition-colors duration-300">
                            Contact 
                        </a> */}
                    </div>
                </div>
            </div>
        </nav> 
    );
}