import "../CSS/Career.css";

const Career2 = () => {
  return (
    <div>
      <fieldset>
        <legend className="title_field">관심사</legend>
        <fieldset id="career_field">
          <legend>분야</legend>
          <table>
            <tr>
              <td>분야</td>
              <td>활동</td>
              <td>시기</td>
              <td>관련 기술</td>
            </tr>
            <tr>
              <td>웹</td>
              <td>트위터 클론코딩</td>
              <td className="i1">2023.6</td>
              <td>react</td>
            </tr>
            <tr>
              <td>앱</td>
              <td className="i1">리액트 네이티브 강의 수강</td>
              <td style={{ paddingRight: "15px" }}>2023.9 ~ 2023.12</td>
              <td>React Native</td>
            </tr>
            <tr>
              <td className="i1">AI</td>
              <td className="i1">기초 수학 강의 수강</td>
              <td className="i1">2023.12</td>
              <td>AI,빅데이터</td>
            </tr>
            <tr>
              <td>DB</td>
              <td>전공 강의 수강</td>
              <td style={{ paddingRight: "15px" }}>2023.9~2023.12</td>
              <td>웹,앱,AI</td>
            </tr>
            <tr>
              <td className="i1">Server</td>
              <td>리눅스 원격서버 세팅</td>
              <td>2023.6</td>
              <td>서버,백엔드,앱,웹</td>
            </tr>
          </table>
        </fieldset>

      </fieldset>
    </div >
  );
};

export default Career2;