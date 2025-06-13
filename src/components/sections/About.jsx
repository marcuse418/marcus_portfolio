import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        About Me
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                            <img 
                                src="/marcus_portfolio/profilepic2.jpg" 
                                alt="Profile" 
                                className="w-full h-full object-cover rounded-full shadow-lg hover:shadow-xl duration-300 transition-shadow"
                            />
                        </div>
                        <div className="glass-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow">
                            <div className="space-y-4">
                                <p className="text-black font-medium">
                                    If keen to learn more, select one of the communications options below.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};