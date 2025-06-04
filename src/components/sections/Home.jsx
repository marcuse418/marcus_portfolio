import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-15 leading-right font-['P22_Mackinac_Pro']">
                        Transforming <span className="text-gray-600">Data</span> into <span className="text-gray-600">Insights</span>
                    </h1>

                    <div className="flex justify-center gap-5">
                        <a href="#projects" className="border border-black/20 bg-white/30 backdrop-blur-md text-black px-8 py-3 rounded-full hover:bg-gray-200/100 transition-all duration-300 shadow-lg hover:shadow-xl w-41 text-center">
                            View Projects
                        </a>

                        <a href="#about" className="border border-black/20 bg-white/30 backdrop-blur-md text-black px-8 py-3 rounded-full hover:bg-gray-200/100 transition-all duration-300 shadow-lg hover:shadow-xl w-41 text-center">
                            About Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};