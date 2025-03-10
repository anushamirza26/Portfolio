import React, { useEffect, useRef, useState } from 'react';
import './education.css';
import eduLogo from './edu.png'; 

const Education = () => {
  const [visibleRows, setVisibleRows] = useState(Array(3).fill(false)); 
   const rowRefs = useRef([]); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index; 
          setVisibleRows(prev => {
            const newVisibleRows = [...prev];
            newVisibleRows[index] = true; 
            return newVisibleRows;
          });
          observer.unobserve(entry.target);
        }
      });
    });

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); 
  }, []);

  return (
    <section id="education">
      <div className="education-container">
        <div className='heai'>EDUCATION</div>
        
     
        <div
          className={`education-row ${visibleRows[0] ? 'visible' : ''}`}
          data-index={0} 
          ref={el => rowRefs.current[0] = el} 
        >
          <div className="logo-container">
            <img src={eduLogo} alt="School Logo" className="logo" />
          </div>
          <div className="vertical-line"></div>
          <div className="info-container">
            <h2>High School</h2>
            <div className="date">2007 - 2019</div>
            <ul>
              <li><strong>High School:</strong> The City School</li>
            </ul>
          </div>
        </div>

        <div
          className={`education-row ${visibleRows[1] ? 'visible' : ''}`}
          data-index={1}
          ref={el => rowRefs.current[1] = el}
        >
          <div className="logo-container">
            <img src={eduLogo} alt="College Logo" className="logo" />
          </div>
          <div className="vertical-line"></div>
          <div className="info-container">
            <h2>College</h2>
            <div className="date">2020 - 2021</div>
            <ul>
              <li><strong>Institution:</strong>Govt College for Women-Sharah e Liaqat </li>
            </ul>
          </div>
        </div>

        <div
          className={`education-row ${visibleRows[2] ? 'visible' : ''}`}
          data-index={2}
          ref={el => rowRefs.current[2] = el}
        >
          <div className="logo-container">
            <img src={eduLogo} alt="University Logo" className="logo" />
          </div>
          <div className="vertical-line"></div>
          <div className="info-container">
            <h2>University</h2>
            <div className="date">2022 - 2026</div>
            <ul>
              <li><strong>Degree:</strong> Bachelor of Information Technology</li>
              <li><strong>Institution:</strong> Bahria University</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
