import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>나만의 메모앱 만들기</h1>
        <Link to={"https://github.com/ksy3432/myApp2"}>
          <h1>(진행 중)</h1>
        </Link>
      </div>
      <img src="/image/notepad.PNG" alt="python" />
      <fieldset id="project_field">
        <legend>프로젝트 개요</legend>
        <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
          <legend>기능</legend>
          1. 기본적인 메모앱 기능(일별 할 일 적기,중요도 체크) 등 <br />
          2. 기존의 달력(google calander등)과 동기화 가능 <br />
          3. 처리되지 않은 일은 자동으로 미리알림 설정 <br />
        </fieldset>
        <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
          <legend>설명</legend>
          나의 취향에 맞춘 나만의 메모앱을 만드는 것이 목적 <br />
          React native를 이용하여 android와 ios 모두 이용 가능 <br />
          Firebase의 호스팅을 사용하여 배포할 예정 <br />
        </fieldset>
        <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
          <legend>사용된 기술</legend>
          프론트엔드 : React native <br />
          백엔드 : Firebase,nodejs <br />
          DB : Firestore(Firebase에서 지원되는 DB) <br />
        </fieldset>
      </fieldset>
    </div>
  );
};

export default Project3;
