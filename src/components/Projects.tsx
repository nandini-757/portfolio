import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import taskImage from "@/assets/task-project.jpg";
import weatherImage from "@/assets/weather-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, TypeScript, and Node.js. Features include real-time inventory, payment processing, and admin dashboard.",
      image: ecommerceImage,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://demo-ecommerce.com",
      featured: true,
      stats: { stars: 234, views: "15.2k" }
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: taskImage,
      technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "WebSockets"],
      github: "https://github.com",
      live: "https://taskmaster-app.com",
      featured: true,
      stats: { stars: 189, views: "12.8k" }
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics using modern web APIs.",
      image: weatherImage,
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      github: "https://github.com",
      live: "https://weather-pro.com",
      featured: false,
      stats: { stars: 156, views: "8.9k" }
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics dashboard for social media management with real-time data visualization and reporting features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://social-analytics.com",
      featured: false,
      stats: { stars: 98, views: "6.2k" }
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated trading bot with machine learning algorithms for cryptocurrency markets. Built with Python backend and React frontend.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "TensorFlow", "WebSockets", "Redis"],
      github: "https://github.com",
      live: "https://crypto-bot.com",
      featured: true,
      stats: { stars: 312, views: "22.1k" }
    },
    {
      title: "Learning Management System",
      description: "Complete LMS platform with video streaming, progress tracking, and interactive assessments for online education.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Supabase", "Stripe", "Video.js", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://edulearn-platform.com",
      featured: false,
      stats: { stars: 145, views: "9.7k" }
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my best work demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="project-card group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{project.stats.stars}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{project.stats.views} views</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{project.stats.stars}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-primary to-secondary">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="border-primary/30">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
