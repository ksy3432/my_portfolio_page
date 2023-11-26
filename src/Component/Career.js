import { useEffect, useRef, useState } from "react";
import careers from "./Data/careers";
import "./CSS/Career.css";
import Comments from "./Comments";
import { Link } from "react-scroll";


function Carears({ name, isLogged }) {
  // const [index, setIndex] = useState(0);
  // const contentChange = (event) => {
  //   setIndex(event.target.value);
  // };
  // return (
  //   <div id="career">
  //     {careers.map((career, index) => (
  //       <button id="button_career" onClick={contentChange} value={index}>
  //         {career.tab}
  //       </button>
  //     ))}
  //     {careers[index].content}
  //     <Comments />
  //   </div>
  // );
  const [index, setIndex] = useState(0);
  const CareerRef = useRef([]);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      setScrollPercent(scrollPercentage);
      CareerRef.current.forEach((ref, idx) => {
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
          {careers.map((career, idx) => (
            <div key={idx} ref={el => CareerRef.current[idx] = el} id={`career-${idx}`} className="career-item" style={{ display: "flex", marginBottom: "50px" }}>
              {career.content}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "fixed", marginTop: "50px", marginLeft: "90px" }} id="indexbutton">
          {careers.map((career, idx) => (
            // <button key={idx} id={`careerswitchbutton-${idx}`} className="indexbuttoncss"
            //   style={{ backgroundColor: idx === index ? "lightgrey" : "", color: idx === index ? "black" : "" }}>
            //   {career.tab}
            // </button>
            <Link key={idx} to={`career-${idx}`} spy={true} smooth={true} duration={500}
              className="indexbuttoncss"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: idx === index ? "lightgrey" : "",
                color: idx === index ? "black" : ""
              }}>
              {career.tab}
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

export default Carears;
