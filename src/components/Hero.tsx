import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Hero Avatar */}
        <div className="mb-8 relative">
          <div className="hero-glow w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-primary-foreground">JS</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
          <span className="text-gradient">Full stack Developer</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
          Building exceptional digital experiences
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Passionate about creating modern, performant web applications with React, TypeScript, and cutting-edge technologies. 
          Ready to contribute to innovative projects at scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="group">
            <div className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="https://www.linkedin.com" className="group">
            <div className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
          <a href="" className="group">
            <div className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating">
        <div className="w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 rounded-full bg-accent/10 blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;