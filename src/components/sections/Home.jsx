import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-right">
                    Transforming <span className="text-[#353935]">Data</span> into <span className="text-[#353935]">Insights</span>
                </h1>

                <div className="flex justify-center">
                    <a href="#projects" className="bg-white backdrop-blur-md text-black px-6 py-3 rounded-full hover:bg-gray-600/90 transition-all duration-300 shadow-xl hover:shadow-xl">
                        View Projects
                    </a>

                    <a href="#about" className="bg-white/80 backdrop-blur-md border border-black/20 text-black ml-4 px-6 py-3 rounded-md hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                        About Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};