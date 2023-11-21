import { useState } from "react";
import projects from "./Data/projects";
import "./CSS/Project.css";
import Comments from "./Comments";

function Project({ name, isLogged }) {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  console.log(name);
  console.log(isLogged);

  return (
    <div id="project">
      {projects.map((project, idx) => (
        <button key={idx} onClick={contentChange} value={idx}>
          {project.tab}
        </button>
      ))}

      {projects[index].content}
      <Comments name={name} isLogged={isLogged} />
    </div>
  );
}

export default Project;
