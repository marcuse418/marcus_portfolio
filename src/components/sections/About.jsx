import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        About Me
                    </h2>
                    <div className="glass-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                        <div className="space-y-4">
                            <p className="text-black flex-grow font-medium">
                                If keen to learn more, select one of the communications options below.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};