
import React from 'react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number; // 1-5
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML5', category: 'frontend', level: 5 },
    { name: 'CSS3', category: 'frontend', level: 5 },
    { name: 'JavaScript', category: 'frontend', level: 4 },
    { name: 'React', category: 'frontend', level: 3 },
    { name: 'Responsive Design', category: 'frontend', level: 4 },
    { name: 'Python', category: 'backend', level: 3 },
    { name: 'C Programming', category: 'backend', level: 3 },
    { name: 'SQL', category: 'backend', level: 3 },
    { name: 'Figma', category: 'tools', level: 4 },
    { name: 'Git & GitHub', category: 'tools', level: 4 },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Design' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle">
            The technologies and tools I use to bring products to life
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="p-6 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md hover:translate-y-[-4px] transition-all"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-medium">{skill.name}</h4>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
