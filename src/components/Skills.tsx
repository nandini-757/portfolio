import { Code, Database, Globe, Smartphone, Zap, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "JavaScript ES6+", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Styled Components", "SASS/SCSS", "Material-UI", "Framer Motion", "CSS Grid", "Flexbox"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Tools & Performance",
      skills: ["Webpack", "Vite", "ESLint", "Prettier", "Jest", "Cypress", "Lighthouse"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      skills: ["Node.js", "GraphQL", "REST APIs", "Firebase", "Supabase", "MongoDB", "PostgreSQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["PWA", "WebSockets", "Service Workers", "Web APIs", "SEO", "Accessibility", "Performance"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile & Cross-Platform",
      skills: ["React Native", "Responsive Design", "Mobile-First", "Touch Interactions", "PWA", "Ionic"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern frontend technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-glow p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">25+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;