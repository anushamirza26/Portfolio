// src/components/ProjectsSection.js
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css'; // Import the CSS file
import p1 from './flick.jpg';
import image2 from './focus first.jpg';
import image3 from './cargo.jpg';

const projects = [
  {
    name: 'Flick Vision Cinema',
    description: 'Flick Vision Cinema, built on .NET Framework using C#, offers a user-friendly platform for movie buffs...',
    duration: '1 month', // Add duration
    image: p1
  },
  {
    name: 'Focus First',
    description: 'Focus First is a tailored application addressing challenges encountered by children with ADHD...',
    duration: '2 months', // Add duration
    image: image2
  },
  {
    name: 'Cargo Captains',
    description: 'Cargo Captains is an application built on React.js for Truck Dispatching Company Official website to gather truckers and Cargo loads...',
    duration: '1.5 months', // Add duration
    image: image3
  },
  // Add more projects here
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className='bod'>
      <section className='bod'id="projects">
      <div className='heai'>PROJECTS</div>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className={`project-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
              {/* Project details (name and duration) on one side */}
              <div className="project-info">
                <h2>{project.name}</h2>
                <h4>{project.duration}</h4>
              </div>
              
              {/* Project card with hover details on the opposite side */}
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

export default ProjectsSection;
