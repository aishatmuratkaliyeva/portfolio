import React from 'react';
import LazyLoad from 'react-lazyload';

const ProjectCard = ({ project, handleModalInfo }) => {

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, '_blank');
    newWindow.opener = null;
    newWindow.rel = 'noopener noreferrer';
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto">
      <LazyLoad height={200}>
        <img
          onClick={() => handleModalInfo(project)}
          src={project.src}
          alt="project card"
          className="rounded-md duration-200 hover:scale-105 cursor-pointer"
        />
      </LazyLoad>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;








