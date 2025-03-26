
import React from 'react';
import { Code2, Lightbulb, Palette, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            Aspiring Front-End Developer with hands-on experience in HTML5, CSS3, and JavaScript, and foundational knowledge of
            React.js (currently mastering Hooks and State Management).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              Passionate about building responsive, accessible web interfaces with clean code. Developed practical skills through a web development internship, creating cross-browser-compatible layouts. Eager to contribute to dynamic teams while expanding expertise in modern frameworks like React.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p>Villupuram, India</p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:syedjaleel850@gmail.com" className="hover:text-primary transition-colors">
                  syedjaleel850@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:7092199238" className="hover:text-primary transition-colors">
                  7092199238
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={18} className="text-primary" />
                <a href="https://www.linkedin.com/in/syedjaleel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/syedjaleel
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Code2 size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">Writing maintainable, well-structured code that follows best practices.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Palette size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive UI</h3>
              <p className="text-muted-foreground">Designing interfaces that work flawlessly across all devices.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">Working effectively with teams to deliver exceptional results.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-muted-foreground">Finding creative solutions to complex technical challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Missing imports:
import { Mail, Phone, Linkedin } from 'lucide-react';
