import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, especially ambitious or large scale projects. 
                Whether you're a company looking to hire, or you're looking for a developer to help bring your ideas to life.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">hello@johndoe.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com" className="group">
                  <div className="p-3 rounded-lg bg-muted/20 hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
                <a href="https://linkedin.com" className="group">
                  <div className="p-3 rounded-lg bg-muted/20 hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
                <a href="https://twitter.com" className="group">
                  <div className="p-3 rounded-lg bg-muted/20 hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glow p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-muted/20 border-muted focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-muted/20 border-muted focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-muted/20 border-muted focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-muted/20 border-muted focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;