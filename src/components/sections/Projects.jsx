import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Portfolio site project built with React, Tailwind CSS and Vite. This is primarily a learning project to practice my skills and showcase my projects. As a non-developer, this was built using various AI tools, such as bolt.ai for protoyping and cursor for developing.",
            imageUrl: "/marcus_portfolio/PortfolioSite.png",
            githubUrl: "https://github.com/marcuse418/portfolio_site",
            imageFit: "cover"
        },
        {
            title: "Project 2",
            description: "A brief description of your second project. Explain what it does and what technologies you used.",
            imageUrl: "/marcus_portfolio/Logo3.png",
            githubUrl: "https://github.com/your-username/project-2",
            imageFit: "contain"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                githubUrl={project.githubUrl}
                                imageFit={project.imageFit}
                            />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};