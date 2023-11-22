import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
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
        <header id="title_name" style={{ display: "flex" }}>
          <div id="title">
            KSY'S
            <div id="title_left">
              Portfolio
            </div>
          </div>
          <div id="loginstyle">
            <Auth />
          </div>
          <br />
        </header>
        <div id="container" style={{ display: "flex" }}>
          <nav className="category">
            <Link to={"/introduction"}>나의 소개</Link>
            <Link to={"/project"}>프로젝트</Link>
            <Link to={"/contest"}>공 모 전 </Link>
            <Link to={"/career"}>나의 경력</Link>

          </nav>
          <main>
            <Routes>
              <Route path="/" Component={index} />
              <Route path="/introduction" Component={Resume} />
              <Route path="/project" Component={Project} />
              <Route path="/contest" Component={Contest} />
              <Route path="/career" Component={Career} />
            </Routes>
          </main>
        </div>
        {/* <footer>
          <i>
            Copyright 2023. 지은이 all rights reserved.
            <br />
            연락처 : //
          </i>
        </footer> */}
      </>
    </BrowserRouter >
  );
}

export default App;
