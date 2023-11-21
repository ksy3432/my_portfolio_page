import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>React와 Firebase를 이용한 트위터 클론코딩하기</h1>
        <Link to={"https://github.com/ksy3432/nwitter"}>
          <h1>(완료)</h1>
        </Link>
      </div>
      <Link to={"https://nwitter-b14ca.web.app/#/"}>
        <img src="/image/twitter_cloning.PNG" alt="react" />
      </Link>
      <fieldset id="project_field">
        <legend>프로젝트 개요</legend>
        <ul style={{ paddingLeft: 0 }}>
          <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
            <legend>기능</legend>
            1. 사이트에 메시지,사진 전송<br />
            2. 회원가입 및 로그인 기능, 소셜 로그인 지원<br />
            3. 로그인한 계정이 올린 메시지,사진 삭제<br />
            4. 로그인한 계정의 프로필 사진 변경 및 닉네임 변경<br />
          </fieldset>

          <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
            <legend>설명</legend>
            트위터의 기본적인 기능을 구현<br />
            nomadcoder의 강의를 참고하여 만듦<br />
            Firebase hosting을 이용하여 배포하여 완성된 프로젝트를 웹사이트로 접속 가능<br></br>

          </fieldset>

          <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
            <legend>사용된 기술</legend>
            프론트엔드 : React<br />
            백엔드 : Firebase로 대체<br />
            데이터베이스 : Firestore(Firebase의 DB)
          </fieldset>

        </ul>
      </fieldset>
    </div>
  );
};

export default Project1;
