import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="Projeto" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Ver projeto</a>
      </div>
    </div>
  );
};

export default ProjectCard;
