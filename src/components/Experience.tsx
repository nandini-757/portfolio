import { MapPin, Calendar, Award, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading frontend development for enterprise applications serving 100k+ users. Architected scalable React applications and mentored junior developers.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led a team of 5 developers on major product redesign",
        "Implemented automated testing, reducing bugs by 60%",
        "Built reusable component library used across 8 products"
      ],
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Jest"]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications from concept to deployment. Collaborated closely with design and backend teams in fast-paced startup environment.",
      achievements: [
        "Built MVP that secured $2M Series A funding",
        "Reduced page load times by 50% through optimization",
        "Implemented real-time features serving 10k+ concurrent users",
        "Established CI/CD pipeline reducing deployment time by 70%"
      ],
      technologies: ["Vue.js", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      company: "Freelance",
      position: "Full-Stack Developer",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Delivered custom web solutions for small to medium businesses. Managed entire project lifecycle from requirements gathering to deployment and maintenance.",
      achievements: [
        "Completed 15+ projects with 100% client satisfaction",
        "Generated $150k+ revenue in first year",
        "Built e-commerce solutions processing $500k+ annually",
        "Established long-term partnerships with 8 recurring clients"
      ],
      technologies: ["React", "PHP", "WordPress", "MySQL", "Stripe"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "React Advanced Certification", issuer: "Meta", year: "2022" },
    { name: "Google Analytics Certified", issuer: "Google", year: "2022" },
    { name: "TypeScript Professional", issuer: "Microsoft", year: "2021" }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey building scalable applications and leading development teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="card-glow p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.position}</h3>
                  <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="card-glow p-4 rounded-lg">
                <h4 className="font-semibold text-foreground">{cert.name}</h4>
                <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;