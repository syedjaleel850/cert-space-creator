
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Grocery List & Expiry Tracker',
      description: 'A full-stack web application for efficient grocery tracking with expiry alerts.',
      year: '2025',
      link: 'https://grocery-minder-hero.netlify.app/',
      githubLink: 'https://github.com/syedjaleel850/grocery-minder-hero.git',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000',
      points: [
        'Built a full-stack web application using React for efficient grocery tracking with expiry alerts.',
        'Implemented user authentication, search & filters, email notifications (Nodemailer), and a dashboard with insights.',
        'Designed a responsive UI with optimized API performance for seamless user experience.'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'JWT', 'Responsive Design']
    },
    {
      title: 'Netflix UI Clone',
      description: 'A fully responsive web application that adapts seamlessly across various devices.',
      year: '2024',
      link: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000',
      points: [
        'Responsive Web Design: Developed a fully responsive web application that adapts seamlessly across various devices.',
        'Interactive Features: Implemented interactive elements using HTML, CSS, and JavaScript, including dynamic buttons and video content.',
        'Cross-Browser Compatibility: Ensured cross-browser compatibility by testing and optimizing the application for major web browsers.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Cross-browser Testing']
    },
    {
      title: 'Diabetic Retinopathy Lesion Segmentation using Swin UNet',
      description: 'A deep learning model to segment five key lesions in diabetic retinopathy images.',
      year: '2025',
      link: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000',
      points: [
        'Developed a deep learning model using Swin Transformer U-Net to segment five key lesions (HM, HE, SE, MA, OD) in diabetic retinopathy images.',
        'Developed a machine learning model for Diabetic Retinopathy detection, achieving an Overall Accuracy of 99.70% and an Overall IoU of 96.70%.',
        'Utilized Python, TensorFlow, and OpenCV for image processing and model training, demonstrating strong technical skills in data science.'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Image Processing', 'Healthcare']
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            Showcasing my technical skills and creativity through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              link={project.link}
              githubLink={project.githubLink}
              image={project.image}
              points={project.points}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
