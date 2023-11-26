import { useEffect, useRef, useState } from "react";
import contests from "./Data/contests";
import Comments from "./Comments";
import "./CSS/Contest.css";
import { Link } from "react-scroll";

function Contest({ name, isLogged }) {

  const [index, setIndex] = useState(0);
  const ContesetRefs = useRef([]);
  const [scrollPercent, setScrollPercent] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      setScrollPercent(scrollPercentage);
      ContesetRefs.current.forEach((ref, idx) => {
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
      <div style={{ height: "10px", width: `${scrollPercent}%`, backgroundColor: "lightgrey", position: "fixed", top: "0" }}></div>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "350px" }}>
          {contests.map((contest, idx) => (
            <div key={idx} ref={el => ContesetRefs.current[idx] = el} id={`contest-${idx}`} className="contest-item" style={{ display: "flex", marginBottom: "50px" }}>
              {contest.content}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "fixed", marginTop: "0px", marginLeft: "90px" }} id="indexbutton">
          {contests.map((contest, idx) => (
            // <button key={idx} id={`contestswitchbutton-${idx}`} className="indexbuttoncss"
            //   style={{ backgroundColor: idx === index ? "lightgrey" : "", color: idx === index ? "black" : "" }}>
            //   {contest.tab}
            // </button>
            <Link key={idx} to={`contest-${idx}`} spy={true} smooth={true} duration={800}
              className="indexbuttoncss"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: idx === index ? "lightgrey" : "",
                color: idx === index ? "black" : ""
              }}>
              {contest.tab}
            </Link>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: "350px" }}>
        <Comments name={name} isLogged={isLogged} />
      </div>
    </div>
  );
}

export default Contest;
