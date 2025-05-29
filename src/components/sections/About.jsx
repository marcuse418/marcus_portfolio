import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    About Me
                </h2>

                <div className="glass-effect p-6 rounded-lg shadow-lg mb-12">
                    <p className="text-gray-800">
                        I'm a software engineer with a passion for building web and mobile applications.
                    </p>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-8">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    <div className="glass-effect p-4 rounded-lg shadow-lg">
                        <h4 className="font-semibold">Frontend</h4>
                        <p className="text-sm text-gray-600">React, Next.js, Tailwind CSS</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg shadow-lg">
                        <h4 className="font-semibold">Backend</h4>
                        <p className="text-sm text-gray-600">Node.js, Express, Python</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg shadow-lg">
                        <h4 className="font-semibold">Mobile</h4>
                        <p className="text-sm text-gray-600">React Native, Swift</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg shadow-lg">
                        <h4 className="font-semibold">Database</h4>
                        <p className="text-sm text-gray-600">MongoDB, PostgreSQL</p>
                    </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-8">Education</h3>
                <div className="max-w-2xl mx-auto">
                    <div className="glass-effect p-6 rounded-lg shadow-lg mb-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="text-left">
                                <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
                                <p className="text-gray-600">University Name</p>
                            </div>
                            <div className="text-gray-500 mt-2 md:mt-0">
                                2018 - 2022
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2 text-left">
                            Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems
                        </p>
                    </div>

                    <div className="glass-effect p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="text-left">
                                <h4 className="text-xl font-bold">Master of Science in Software Engineering</h4>
                                <p className="text-gray-600">University Name</p>
                            </div>
                            <div className="text-gray-500 mt-2 md:mt-0">
                                2022 - 2024
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2 text-left">
                            Focus: Advanced Software Development, Cloud Computing, Machine Learning
                        </p>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};