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
              <td>2023.6</td>
              <td>react</td>
            </tr>
            <tr>
              <td>앱</td>
              <td>리액트 네이티브 강의 수강</td>
            </tr>
            <tr>
              <td>AI</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>DB</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Server</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </fieldset>

      </fieldset>
    </div>
  );
};

export default Career2;