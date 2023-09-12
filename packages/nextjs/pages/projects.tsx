import React from "react";
import type { NextPage } from "next";

type Project = {
  id: string;
  name: string;
  description: string;
};

const projects: Project[] = [
  // Add projects here
];

const Projects: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-8">Projects Page</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
