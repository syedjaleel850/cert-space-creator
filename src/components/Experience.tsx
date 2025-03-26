
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            My professional journey and internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-sm font-medium inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
                  <Calendar size={14} />
                  <span>Jul 2024 - Sep 2024</span>
                </div>
                <h3 className="text-2xl font-semibold">Web Development Intern</h3>
                <p className="text-lg text-muted-foreground">OCTANET SERVICES PVT LTD</p>
              </div>
              
              <Button variant="outline" size="sm" className="shrink-0 flex items-center gap-1.5" asChild>
                <a href="#" className="flex items-center gap-1.5">
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Responsibilities & Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Completed hands-on training in HTML5, CSS3, and JavaScript for modern web development.</li>
                  <li>Developed responsive user interfaces, improving design and functionality for live projects.</li>
                  <li>Collaborated with industry experts to apply best practices in React.js and Figma-based prototyping.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Skills Applied:</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design', 'Figma', 'UI/UX'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
