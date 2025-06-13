import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row relative items-center justify-center">
            {/* Left side - Content */}
            <div className="w-full md:w-2/3 flex items-center justify-center p-4 md:p-8">
                <RevealOnScroll>
                    <div className="text-center md:text-left z-10">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-15 leading-tight font-['Souvenir']">
                            Transforming <span className="text-[#636A63]">Data</span> into <span className="text-[#636A63]">Insights</span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start">
                            <a href="#projects" className="border border-black/20 bg-white/30 backdrop-blur-md text-black px-6 md:px-8 py-3 rounded-full hover:bg-gray-200/100 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                                View Projects
                            </a>

                            <a href="#about" className="border border-black/20 bg-white/30 backdrop-blur-md text-black px-6 md:px-8 py-3 rounded-full hover:bg-gray-200/100 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                                About Me
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Right side - Background Image */}
            <div 
                className="w-full md:w-1/2 relative flex items-center justify-center md:-ml-40 -mt-10 md:mt-0"
                style={{
                    backgroundImage: 'url(/marcus_portfolio/bgimage.png)',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '400px'
                }}
            />
        </section>
    );
};
