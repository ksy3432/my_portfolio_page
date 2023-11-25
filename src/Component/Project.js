import { useEffect, useState, useRef } from "react";
import projects from "./Data/projects";
import "./CSS/Project.css";
import Comments from "./Comments";

function Project({ name, isLogged }) {
  const [index, setIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      projectRefs.current.forEach((ref, idx) => {
        if (ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setIndex(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(name);
  console.log(isLogged);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "350px" }}>
          {projects.map((project, idx) => (
            <div key={idx} ref={el => projectRefs.current[idx] = el} id={`project-${idx}`} className="project-item" style={{ display: "flex", marginBottom: "50px" }}>
              {project.content}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "fixed", marginTop: "50px", marginLeft: "60px" }} id="indexbutton">
          {projects.map((project, idx) => (
            <button key={idx} id={`projectswitchbutton-${idx}`} className="indexbuttoncss"
              style={{ backgroundColor: idx === index ? "lightgrey" : "", color: idx === index ? "black" : "" }}>
              {project.tab}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: "350px" }}>
        <Comments name={name} isLogged={isLogged} />
      </div>
    </div>
  );


}

export default Project;
