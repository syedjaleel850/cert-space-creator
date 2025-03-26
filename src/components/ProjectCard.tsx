
import React from 'react';
import { Calendar, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  link?: string;
  githubLink?: string;
  image?: string;
  points: string[];
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  year,
  link,
  githubLink,
  image,
  points,
  technologies,
}) => {
  return (
    <div className="group rounded-2xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all overflow-hidden animate-fade-in">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <div className="text-sm font-medium inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
          <Calendar size={14} />
          <span>{year}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-secondary rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {link && (
            <Button variant="default" size="sm" className="flex items-center gap-1.5" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Demo
                <ExternalLink size={14} />
              </a>
            </Button>
          )}
          
          {githubLink && (
            <Button variant="outline" size="sm" className="flex items-center gap-1.5" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                View Code
                <Github size={14} />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
