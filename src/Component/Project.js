
import { useEffect, useState, useRef } from "react";
import { Link } from 'react-scroll';
import projects from "./Data/projects";
import "./CSS/Project.css";
import Comments from "./Comments";

function Project() {
  const [index, setIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const projectRefs = useRef([]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      setScrollPercent(scrollPercentage);

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

  // console.log(name);
  // console.log(isLogged);

  return (
    <div>
      <div style={{ height: "10px", width: `${scrollPercent}%`, backgroundColor: "lightgrey", position: "fixed", top: "0" }}></div>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "350px" }}>
          {projects.map((project, idx) => (
            <div key={idx} ref={el => projectRefs.current[idx] = el} id={`project-${idx}`} className="project-item" style={{ display: "flex", marginBottom: "50px" }}>
              {project.content}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "fixed", marginTop: "50px", marginLeft: "90px" }} id="indexbutton" >
          {projects.map((project, idx) => (
            <Link key={idx} to={`project-${idx}`} spy={true} smooth={true} duration={800}
              className="indexbuttoncss"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: idx === index ? "lightgrey" : "",
                color: idx === index ? "black" : ""
              }}>
              {project.tab}
            </Link>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: "350px" }}>
        <Comments />
      </div>
    </div>
  );
}

export default Project;

