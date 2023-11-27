import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import index from "./Component/index";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";

import "./App.css";
import Resume from "./Component/Intro/Resume";
import Auth from "./Component/Auth/Auth";



function App() {
  return (
    <BrowserRouter>
      <>
        <header id="title_name" style={{ display: "flex", marginTop: "20px", marginLeft: "40px" }}>
          <div id="title">
            KSY'S
            <div id="title_left">
              Portfolio
            </div>
          </div>
          <nav className="category" style={{ display: "flex" }}>
            <Link to={"/introduction"}>나의 소개</Link>
            <Link to={"/project"}>프로젝트</Link>
            <Link to={"/contest"}>공 모 전 </Link>
            <Link to={"/career"}>나의 경력</Link>
            <div id="loginstyle">
              <Auth />
            </div>
          </nav>
          <br />
        </header>
        <div id="container" style={{ display: "flex" }}>
          <main>
            <Routes>
              {/* <Route path="/" Component={index} /> */}
              <Route path="/introduction" Component={Resume} />
              <Route path="/project" Component={Project} />
              <Route path="/contest" Component={Contest} />
              <Route path="/career" Component={Career} />
            </Routes>
          </main>
        </div>
        <footer style={{ width: "1300px", textAlign: "center", marginBottom: "50px" }}>
          <i style={{ fontSize: "25px", marginLeft: "300px" }}>
            Copyright 2023. seyeonkim_ksy3432 all rights reserved.
            <br />
          </i>
        </footer>
      </>
    </BrowserRouter >
  );
}

export default App;
