import { useEffect, useRef, useState } from "react";
import contests from "./Data/contests";
import Comments from "./Comments";
import "./CSS/Contest.css";

function Contest({ name, isLogged }) {
  // const [index, setIndex] = useState(0);
  // const contentChange = (event) => {
  //   setIndex(event.target.value);
  // };
  // return (
  //   <div id="contests">
  //     {contests.map((contests, index) => (
  //       <button id="contestinputbutton" onClick={contentChange} value={index}>
  //         {contests.tab}
  //       </button>
  //     ))}
  //     {contests[index].content}
  //     <Comments />
  //   </div>
  // );

  const [index, setIndex] = useState(0);
  const ContesetRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
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
            <button key={idx} id={`contestswitchbutton-${idx}`} className="indexbuttoncss"
              style={{ backgroundColor: idx === index ? "lightgrey" : "", color: idx === index ? "black" : "" }}>
              {contest.tab}
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

export default Contest;
