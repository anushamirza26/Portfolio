import React, { useEffect } from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPhp, FaCogs } from 'react-icons/fa';
import './SkillsSection.css';

const skills = [
  { name: <p style={{ color: '#FFFFFF' }}>React</p>, icon: <FaReact style={{ color: "#61dafb", backgroundColor: "black" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>Node.js</p>, icon: <FaNode style={{ color: "green" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>HTML5</p>, icon: <FaHtml5 style={{ color: "white", backgroundColor: "#E44D26" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>CSS3</p>, icon: <FaCss3Alt style={{ color: "white", backgroundColor: "#264de4" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>JavaScript</p>, icon: <FaJsSquare style={{ color: "white", backgroundColor: "#F7DF1E" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>Java</p>, icon: <FaJava style={{ color: "#007396", backgroundColor: "black" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>.NET Framework</p>, icon: <FaCogs style={{ color: "white", backgroundColor: "#512bd4" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>PHP</p>, icon: <FaPhp style={{ color: "white", backgroundColor: "#777bb3" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>C++</p>, icon: <FaCogs style={{ color: "white", backgroundColor: "#00599C" }} /> },
  { name: <p style={{ color: '#FFFFFF' }}>C#</p>, icon: <FaCogs style={{ color: "white", backgroundColor: "#68217A" }} /> },
];

const softSkills = [
  "Communication",
  "Problem-solving",
  "Adaptability",
  "Time Management",
  "Teamwork",
];

const SkillsSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className='heai animate-on-scroll'>TECHNICAL SKILLS</div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card animate-on-scroll">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className='heai animate-on-scroll'>SOFT SKILLS</div>
      <div className="soft-skills-list">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-item animate-on-scroll">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
