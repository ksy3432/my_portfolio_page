import { useState } from "react";
import careers from "./Data/careers";
import "./CSS/Career.css";
import Comments from "./Comments";


function Carears() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="career">
      {careers.map((career, index) => (
        <button id="button_career" onClick={contentChange} value={index}>
          {career.tab}
        </button>
      ))}
      {careers[index].content}
      <Comments />
    </div>
  );
}

export default Carears;
