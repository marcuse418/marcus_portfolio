import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "Enhancing Predictive Analytics in Business Intelligence with AI-Generated Synthetic Data",
            description: "My Masters research that investigates the effectiveness of generative AI in addressing data scarcity within business intelligence frameworks. By simulating a data-restricted environment using a subset of the COFINFAD dataset, I evaluated how synthetic data augmentation influences the performance of machine learning models designed to predict customer churn.",
            imageUrl: "/marcus_portfolio/SDR_Thumbnail.png",
            githubUrl: "https://github.com/marcuse418/synthetic_data_research",
            imageFit: "contain"
        },
        {
            title: "Melbourne Traffic Shiny App",
            description: "A Shiny app that allows users to explore traffic data in Melbourne, Australia. The app is built with R and Shiny, and uses the Melbourne Open Data Portal API to fetch traffic data.",
            imageUrl: "/marcus_portfolio/melb_shiny_app_2.png",
            githubUrl: "https://github.com/marcuse418/melb-traffic-shiny-app",
            imageFit: "contain"
        },
        {
            title: "Portfolio Website",
            description: "Portfolio site project built with React, Tailwind CSS and Vite. This is primarily a learning project to practice my skills and showcase my projects. As a non-developer, this was built using various AI tools, such as bolt.ai for protoyping and cursor for developing.",
            imageUrl: "/marcus_portfolio/PortfolioSite.png",
            githubUrl: "https://github.com/marcuse418/portfolio_site",
            imageFit: "cover"
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