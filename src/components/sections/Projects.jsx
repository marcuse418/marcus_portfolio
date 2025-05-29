import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="glass-effect p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Project 1</h3>
                        <p className="text-gray-600">Description of Project 1</p>
                        <a href="https://github.com/your-username/project-1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">View on GitHub</a>
                    </div>
                    <div className="glass-effect p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-2">Project 2</h3>
                        <p className="text-gray-600">Description of Project 1</p>
                    </div> 
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};