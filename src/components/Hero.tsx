
import React from 'react';
import { ArrowDown, ExternalLink, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Front-End Developer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              I'm <span className="text-primary">Syed Jaleel S</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate front-end developer creating responsive, accessible web interfaces with clean code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://www.linkedin.com/in/syedjaleel" target="_blank" rel="noopener noreferrer" 
                className="p-2 text-muted-foreground hover:text-primary transition-colors" 
                aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:syedjaleel850@gmail.com" 
                className="p-2 text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:7092199238" 
                className="p-2 text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] animate-fade-in-left">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl overflow-hidden">
              <div className="absolute inset-0 blur-3xl opacity-30 bg-primary/30"></div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-tr from-primary to-primary/60 rounded-full flex items-center justify-center text-white text-5xl sm:text-6xl font-bold animate-float shadow-xl">
                  SJ
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
