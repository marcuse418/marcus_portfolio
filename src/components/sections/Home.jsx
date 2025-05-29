import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right">
                    Test Text
                </h1>

                <p className="text-lg md:text-2xl mb-10">
                    Test paragraph
                </p>
                <div className="flex justify-center">
                    <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
                        View Projects
                    </a>

                    <a href="#about" className=" border border-black bg-white text-black ml-4 px-6 py-3 rounded-md hover:bg-blue-100 transition-colors duration-300">
                        About Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};