// src/components/Experience.js
import React, { useState, useEffect, useRef } from 'react';
import ProjectModal from './ProjectModal';
import './experience.css';
import p1 from './faysal cert.png';
import image2 from './spacex cert.png';
import image3 from './paysys cert.png';

const exp = [
  {
    name: 'React Developer- INTERN @ PAYSYS LAB',
    description: 'Explored HTML, CSS and ReactJs detail.Implemented my learnings by making My portfolio and periodic table and many other projects.',
    duration: 'Aug 2024 - Sept 2024',
    image: image3,
  },


];

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null); // Reference to the Experience section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger the animation when section is in view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <section
        id="experience"
        ref={sectionRef}
        className={isInView ? 'fadeIn' : ''} // Apply animation class when in view
      >
        <div className="heai">EXPERIENCE</div>
        <div className="project-list">
          {exp.map((project, index) => (
            <div key={index} className={`project-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="project-info">
                <h2>{project.name}</h2>
                <h4>{project.duration}</h4>
              </div>

              <div className="project-card" onClick={() => openModal(project)}>
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-details">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-backdrop" onClick={closeModal}>
            <ProjectModal project={selectedProject} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Experience;
