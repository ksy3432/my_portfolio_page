import { Bounce } from "react-reveal";
import "../CSS/Career.css";

const Career1 = () => {
  return (
    <Bounce top>
      <div>
        <fieldset id="wrapper_field">
          <legend className="title_field">인턴 & 경력</legend>
          <fieldset id="career_field">
            <legend className="int_tit">인턴</legend>
            <table>
              <tr>
                <td className="i1">기간</td>
                <td>장소</td>
              </tr>
              <tr>
                <td className="i1">2024.3 ~ 2024.9</td>
                <td>가천대학교 산학 협력 인턴</td>
              </tr>
              <tr>
                <td className="i1">2025.3 ~ 2026.12</td>
                <td>코코네스쿨 창업 개발자 인턴</td>
              </tr>
              <tr>
                <td>2026.1 ~ 2027.1</td>
                <td>싸피(Saffy)</td>
              </tr>
            </table>
          </fieldset>
          <fieldset id="career_field">
            <legend className="int_tit">경력</legend>
            <table>
              <tr>
                <td className="i1">기간</td>
                <td>주제</td>
              </tr>
              <tr>
                <td className="i1">2021 ~ 2022</td>
                <td>개인프로젝트</td>
              </tr>
              <tr>
                <td className="i1">2023.6 ~ 2023.7</td>
                <td>리액트 개인프로젝트</td>
              </tr>

            </table>
          </fieldset>

        </fieldset>

      </div>
    </Bounce>
  );
};

export default Career1;