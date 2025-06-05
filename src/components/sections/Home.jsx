import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex relative">
            {/* Left side - Content */}
            <div className="w-2/3 flex items-center justify-center p-8">
                <RevealOnScroll>
                    <div className="text-left z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-15 leading-right font-['Souvenir']">
                            Transforming <span className="text-[#636A63]">Data</span> into <span className="text-[#636A63]">Insights</span>
                        </h1>

                        <div className="flex gap-5">
                            <a href="#projects" className="border border-black/20 bg-white/30 backdrop-blur-md text-black px-8 py-3 rounded-full hover:bg-gray-200/100 transition-all duration-300 shadow-lg hover:shadow-xl w-41 text-center">
                                View Projects
                            </a>

                            <a href="#about" className="border border-black/20 bg-white/30 backdrop-blur-md text-black px-8 py-3 rounded-full hover:bg-gray-200/100 transition-all duration-300 shadow-lg hover:shadow-xl w-41 text-center">
                                About Me
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Right side - Background Image */}
            <div 
                className="w-1/2 relative flex items-center justify-center -ml-40"
                style={{
                    backgroundImage: 'url(/bgimage.png)',
                    backgroundSize: '160%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
        </section>
    );
};
