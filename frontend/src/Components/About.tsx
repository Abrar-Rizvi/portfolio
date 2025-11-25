"use client"
import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

export const About = () => {


  const skills = {
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
    backend: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'],
    aiml: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn', 'Hugging Face'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'],
  };

  const stats = [
    { number: 3, suffix: '+', label: 'Years Experience' },
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 95, suffix: '%', label: 'Client Satisfaction' },
    { number: 10, suffix: '+', label: 'Technologies' },
  ];

  // Counter animation hook
  const useCountUp = (end: number, isVisible: boolean, duration: number = 2000) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [end, isVisible, duration]);

    return count;
  };

  const skillCategories = [
    { title: 'Frontend', icon: Code, skills: skills.frontend, color: 'bg-blue-100 text-blue-600' },
    { title: 'Backend', icon: Database, skills: skills.backend, color: 'bg-green-100 text-green-600' },
    { title: 'AI/ML', icon: Brain, skills: skills.aiml, color: 'bg-purple-100 text-purple-600' },
    { title: 'Tools', icon: Wrench, skills: skills.tools, color: 'bg-orange-100 text-orange-600' },
  ];



  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Illustration */}
          <div
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-linear-to-br from-sky-400 to-blue-600 rounded-2xl transform rotate-6 opacity-20"></div>
              
              {/* Profile illustration matching hero robot theme */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8 w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Professional avatar with robot theme */}
                  <circle cx="150" cy="100" r="60" fill="#334155" />
                  
                  {/* Head details */}
                  <circle cx="135" cy="95" r="8" fill="#38bdf8" />
                  <circle cx="165" cy="95" r="8" fill="#38bdf8" />
                  <path d="M 130 115 Q 150 125 170 115" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" fill="none" />
                  
                  {/* Body */}
                  <rect x="100" y="160" width="100" height="100" rx="10" fill="#475569" />
                  
                  {/* Chest panel */}
                  <rect x="120" y="180" width="60" height="60" rx="5" fill="#1e293b" />
                  <line x1="130" y1="195" x2="170" y2="195" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="130" y1="210" x2="165" y2="210" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="130" y1="225" x2="160" y2="225" stroke="#38bdf8" strokeWidth="2" />
                  
                  {/* Arms */}
                  <rect x="70" y="170" width="25" height="60" rx="5" fill="#334155" />
                  <rect x="205" y="170" width="25" height="60" rx="5" fill="#334155" />
                  
                  {/* Decorative code symbols */}
                  <text x="30" y="50" fill="#38bdf8" fontSize="24" opacity="0.3">{"</>"}</text>
                  <text x="240" y="280" fill="#38bdf8" fontSize="24" opacity="0.3">{"{ }"}</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div >
            {/* Section Heading */}
            <div
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-600 mb-3">
                About Me
              </h2>
              <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
            </div>

            {/* Introduction */}
            <article
              className="mb-10"
            >
              <div className="space-y-4 text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  I&apos;m a <strong className="text-blue-600">Full Stack AI Developer</strong> with 
                  a passion for creating intelligent, scalable web applications. With expertise spanning 
                  modern frontend frameworks, robust backend systems, and cutting-edge AI integration, 
                  I bring ideas to life through clean, efficient code.
                </p>
                <p>
                  My journey into tech began with curiosity about how things work under the hood. 
                  What started as building simple websites evolved into a deep fascination with 
                  AI and machine learning. Today, I specialize in bridging the gap between 
                  traditional web development and artificial intelligence, creating applications 
                  that are both powerful and user-friendly.
                </p>
                <p>
                  I believe in writing code that matters—solutions that solve real problems and 
                  create genuine value. Whether it&apos;s architecting a scalable backend, crafting 
                  pixel-perfect interfaces, or implementing AI models, I&apos;m committed to delivering 
                  excellence in every project I undertake.
                </p>
              </div>
            </article>

            {/* Skills Section */}
            <div
              className="mb-10"
            >
              <h3 className="text-2xl font-semibold text-slate-600 mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={category.title}
                      className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg ${category.color} mr-3`}>
                          <Icon size={20} />
                        </div>
                        <h4 className="font-semibold text-slate-700">{category.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-100 text-slate-500 text-sm rounded-full hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                  const StatCounter = () => {
                    const isVisible = true;
                    const count = useCountUp(stat.number, isVisible, 2000);
                    return <>{count}{stat.suffix}</>;
                  };
                  
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">
                        <StatCounter />
                      </div>
                      <div className="text-sm md:text-base text-slate-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}