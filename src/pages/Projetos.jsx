import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projetos = () => {
  return (
    <section className="py-20 bg-light">
      <h2 className="display-4 text-center text-primary">Meus Projetos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <ProjectCard title="Projeto 1" description="Descrição do projeto 1" />
        </div>
        <div className="col">
          <ProjectCard title="Projeto 2" description="Descrição do projeto 2" />
        </div>
        <div className="col">
          <ProjectCard title="Projeto 3" description="Descrição do projeto 3" />
        </div>
      </div>
    </section>
  );
};

export default Projetos;
